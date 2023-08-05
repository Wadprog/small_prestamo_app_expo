import React from 'react'
import * as Yup from 'yup'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
// Custom dependencies
import tw from '../../../lib/tailwind'
import Text from '../../../components/Text'
import PaymentPlan from '../../../components/PaymentPlan'
import ActivityIndicator from '../../../components/LoadIndicator'
import Error from '../../../components/FullError'
import ListItemPicker from '../../../components/ItemPicker/ListItemPicker'
import { Form, Submit, Toggle } from '../../../components/form'

import { RequestPlans, getPlans } from '../../../store/plans'

const initialValues = {
  plan: '',
  monthly: false,
}
const ValidationSchema = Yup.object().shape({
  plan: Yup.string().required().label('plan'),
  monthly: Yup.boolean().required().label('Payment Type'),
})
const FindFriends = ({ handleSubmit, onError }) => {
  const dispatch = useDispatch()
  const plans = useSelector(getPlans)
  const [period, setPeriod] = React.useState('year')

  handlePeriod = (period) => {
    !period ? setPeriod('year') : setPeriod('month')
  }
  React.useEffect(() => {
    dispatch(RequestPlans())
  }, [])
  React.useEffect(() => {
    if (plans.error)
      onError({ message: plans.error, reload: () => dispatch(RequestPlans()) })
    else onError(false)
  }, [plans.error])

  return (
    <>
      {plans.error ? (
        <Error
          errorMsg={plans?.error || null}
          onReload={() => {
            dispatch(RequestPlans())
          }}
        />
      ) : (
        <>
          {!plans.loading ? (
            <Form
              validationSchema={ValidationSchema}
              initialValues={initialValues}
              onSubmit={(values) => {
                handleSubmit({
                  plan: {
                    id: values.plan,
                    period: values.monthly === 'true' ? 'monthly' : 'yearly',
                  },
                })
              }}
            >
              <View style={tw`flex-1 flex  justify-between items-center `}>
                <View style={tw`h-[90%] `}>
                  <View style={tw`flex flex-row justify-center items-center`}>
                    <Text category="h6">Yearly</Text>
                    <Toggle
                      name="monthly"
                      style={tw`mx-3 my-4`}
                      onSwitch={handlePeriod}
                    />
                    <Text category="h6">Monthly</Text>
                  </View>

                  <View style={tw` h-[90%] `}>
                    <ListItemPicker
                      period={period}
                      name="plan"
                      Component={PaymentPlan}
                      data={
                        plans?.data?.data?.map((data) => ({
                          ...data,
                          options: [],
                        })) || [].map((data) => ({ ...data, options: [] }))
                      }
                    />
                  </View>
                </View>

                <View style={tw`w-full mt-4  `}>
                  <Submit title="Finish" />
                </View>
              </View>
            </Form>
          ) : (
            <ActivityIndicator loadingText="loading plans" />
          )}
        </>
      )}
    </>
  )
}

FindFriends.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
}
export default FindFriends
