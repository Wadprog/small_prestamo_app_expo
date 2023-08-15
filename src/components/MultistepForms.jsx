import React from 'react'
import { View } from 'react-native'
import StepIndicator from 'react-native-step-indicator'

import config from '../config'
import tw from '../lib/tailwind'

let formsData = {}
const customStyles = {
  ...config.stepIndicatorStyles,
}

const MultistepForms = ({
  onFinish,
  onLoading,
  onError,
  steps,
  indicators = true,
  ...otherProps
}) => {
  const handleError = (err) => {
    onError(err)
  }
  const [previousForm, setPreviousForm] = React.useState({})
  const handleSubmit = (data) => {
    console.log('called')
    console.log(data)
    formsData = { ...formsData, ...data }
    console.log({ currentPosition, steps: steps.length })

    if (currentPosition < steps.length - 1) {
      setPreviousForm(data)
      setCurrentPosition((position) => position + 1)
    } else {
      console.log('last step')
      onFinish(formsData)
    }
  }
  const [currentPosition, setCurrentPosition] = React.useState(0)
  const Step = steps[currentPosition].component

  React.useEffect(() => {
    return () => {
      formsData = {}
    }
  }, [])

  return (
    <View style={tw`m-0 flex h-full`}>
      <View style={tw`flex-1`}>
        {indicators && (
          <View style={tw` pb-2 mt-6`}>
            <StepIndicator
              customStyles={customStyles}
              currentPosition={currentPosition}
              labels={steps.map((step) => step.label)}
            />
          </View>
        )}

        <View style={tw`flex-1 flex `}>
          <Step
            onLoading={onLoading}
            onError={handleError}
            handleSubmit={handleSubmit}
            formValues={formsData[steps[currentPosition].name]}
            {...otherProps}
            previousForm={previousForm}
          />
        </View>
      </View>
    </View>
  )
}

export default MultistepForms
