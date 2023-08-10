import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { View, Image, Alert, TouchableHighlight } from 'react-native'
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { useSelector, useDispatch } from 'react-redux'
import StepIndicator from 'react-native-step-indicator'

// Core components
import tw from '../../lib/tailwind'
import { image } from '../../config'
import { getCurrentUser, Register } from '../../store/auth'

import { PersonalInfo, CompanyInfo, Plans } from './Components'

import Screen from '../../components/screen'
import configuration from '../../config'

import { ThemeContext } from '../../context/theme.context'

const steps = [
  { label: "Personal's info", component: PersonalInfo },
  { label: "Company's info", component: CompanyInfo },
  { label: "Plan's info", component: Plans },
]
let formsData = {}

const stepsToObject = ['employee', 'company', 'plan']
const customStyles = {
  ...configuration.stepIndicatorStyles,
}

const RegistrationStepsContainer = () => {
  const themeContext = React.useContext(ThemeContext)
  const dispatch = useDispatch()
  const user = useSelector(getCurrentUser)

  const [currentPosition, setCurrentPosition] = React.useState(0)
  const Step = steps[currentPosition].component

  React.useEffect(() => {
    return () => {
      formsData = {}
    }
  }, [])
  const handleSubmit = (data) => {
    console.log({ data })
    formsData = { ...formsData, ...data }

    if (currentPosition < steps.length - 1) {
      setCurrentPosition((position) => position + 1)
    } else {
      delete formsData.employee.email
      dispatch(Register(formsData))
    }
  }
  const [err, setErr] = React.useState(null)

  return (
    <Screen loading={user.loading} error={err}>
      {currentPosition >= 1 && (
        <TouchableHighlight
          onPress={() => {
            err && setErr(null)
            setCurrentPosition((position) => position - 1)
          }}
        >
          <MaterialCommunityIcons
            name="chevron-left"
            size={30}
            color={themeContext.theme === 'light' ? 'black' : 'white'}
          />
        </TouchableHighlight>
      )}
      <View style={tw`mx-0 -mt-2 flex flex-1`}>
        <View style={tw`flex-1`}>
          {currentPosition === 1 ? (
            <View style={tw`py-2`}>
              <Image
                style={tw`h-[150px] w-[150px] mt-3 mx-auto rounded-full`}
                source={image.log}
              />
            </View>
          ) : (
            <View style={tw`mb-20`} />
          )}
          <View style={tw` pb-2`}>
            <StepIndicator
              customStyles={customStyles}
              currentPosition={currentPosition}
              labels={steps.map((step) => step.label)}
            />
          </View>

          <View style={tw`flex-1 flex px-4 pt-2`}>
            {/* <KeyboardAwareScrollView> */}
            <Step
              formValues={formsData[stepsToObject[currentPosition]]}
              onError={(val) => setErr(val)}
              handleSubmit={handleSubmit}
              title={steps[currentPosition].label}
              onBack={() => {
                if (currentPosition <= 1) {
                  return Alert.alert('You can not go back')
                }
                return setCurrentPosition((position) => position - 1)
              }}
            />
            {/* </KeyboardAwareScrollView> */}
          </View>
        </View>
      </View>
    </Screen>
  )
}

export default RegistrationStepsContainer
