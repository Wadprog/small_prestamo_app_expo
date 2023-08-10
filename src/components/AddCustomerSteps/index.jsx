import { View, Text } from 'react-native'
import React from 'react'

import tw from '../../lib/tailwind'

let formsData = {}

import AddcustomerForm from './AddCustomerForm'
const steps = [{ label: "Customer's info", component: AddcustomerForm }]
const stepsToObject = ['employee', 'company', 'plan']

const CustomerRegistration = ({ handleError }) => {
  const [currentPosition, setCurrentPosition] = React.useState(0)

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
  const Step = steps[currentPosition].component
  return (
    <View style={tw`p-3`}>
      <Step
        formValues={formsData[stepsToObject[currentPosition]]}
        onError={(val) => handleError(val)}
        handleSubmit={handleSubmit}
      />
    </View>
  )
}

export default CustomerRegistration
// import React from 'react'

// import { View, Image, Alert, TouchableHighlight } from 'react-native'
// // import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

// import { useSelector, useDispatch } from 'react-redux'

// // Core components
// import tw from '../../lib/tailwind'
// import { image } from '../../config'
// import { getCurrentUser, Register } from '../../store/auth'

// import AddcustomerForm from './AddCustomerForm'

// const steps = [{ label: "Customer's info", component: AddcustomerForm }]
// let formsData = {}

// const stepsToObject = ['employee', 'company', 'plan']

// const RegistrationStepsContainer = () => {
//   const dispatch = useDispatch()
//   const user = useSelector(getCurrentUser)
//   const [currentPosition, setCurrentPosition] = React.useState(0)
//   const Step = steps[currentPosition].component

//   React.useEffect(() => {
//     return () => {
//       formsData = {}
//     }
//   }, [])
//   const handleSubmit = (data) => {
//     console.log({ data })
//     formsData = { ...formsData, ...data }

//     if (currentPosition < steps.length - 1) {
//       setCurrentPosition((position) => position + 1)
//     } else {
//       delete formsData.employee.email
//       dispatch(Register(formsData))
//     }
//   }
//   const [err, setErr] = React.useState(null)

//   return (
//     <View>
//       {/* {currentPosition >= 1 && (
//         <TouchableHighlight
//           onPress={() => {
//             err && setErr(null)
//             setCurrentPosition((position) => position - 1)
//           }}
//         >
//           <MaterialCommunityIcons
//             name="chevron-left"
//             size={30}
//             color={themeContext.theme === 'light' ? 'black' : 'white'}
//           />
//         </TouchableHighlight>
//       )} */}
//       <View style={tw`mx-0 -mt-2 flex flex-1`}>
//         <View style={tw`flex-1`}>
//           {currentPosition === 1 ? (
//             <View style={tw`py-2`}>
//               <Image
//                 style={tw`h-[150px] w-[150px] mt-3 mx-auto rounded-full`}
//                 source={image.log}
//               />
//             </View>
//           ) : (
//             <View style={tw`mb-20`} />
//           )}

//           <View style={tw`flex-1 flex px-4 pt-2`}>
//             {/* <KeyboardAwareScrollView> */}
//             <Step
//               formValues={formsData[stepsToObject[currentPosition]]}
//               onError={(val) => setErr(val)}
//               handleSubmit={handleSubmit}
//               title={steps[currentPosition].label}
//               onBack={() => {
//                 if (currentPosition <= 1) {
//                   return Alert.alert('You can not go back')
//                 }
//                 return setCurrentPosition((position) => position - 1)
//               }}
//             />
//             {/* </KeyboardAwareScrollView> */}
//           </View>
//         </View>
//       </View>
//     </View>
//   )
// }

// export default RegistrationStepsContainer
