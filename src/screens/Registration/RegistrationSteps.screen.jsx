import React from 'react'
import { View, Image, Alert, TouchableHighlight } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'

import { useSelector, useDispatch } from 'react-redux'
import StepIndicator from 'react-native-step-indicator'

// Core components
import tw from '../../lib/tailwind'
import { image, text } from '../../config'
import { getCurrentUser, Register } from '../../store/auth'

import { PersonalInfo, CompanyInfo, FindFriends } from '.'

import Screen from '../../components/screen/Screen'

import { ThemeContext } from '../../context/theme.context'

const steps = [
  { label: "Personal's info", component: PersonalInfo },
  { label: "Company's info", component: CompanyInfo },
  { label: "Plan's info", component: FindFriends },
]
let formsData = {}

const stepsToObject = ['employee', 'company', 'plan']
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 4,
  stepStrokeCurrentColor: tw.color('color-primary-500'),
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: tw.color('color-primary-500'),
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: tw.color('color-primary-500'),
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: tw.color('color-primary-600'),
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: tw.color('color-primary-500'),
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: tw.color('color-primary-500'),
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
          </View>
        </View>
      </View>
    </Screen>
  )
}

export default RegistrationStepsContainer
