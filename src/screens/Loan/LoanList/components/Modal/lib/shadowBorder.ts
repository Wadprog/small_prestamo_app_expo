import tw from '../../../../../../lib/tailwind'
export default (selected: boolean) => ({
  borderColor: selected
    ? tw.color(`border-color-primary-500`)
    : tw.color(`border-gray-200`),
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.27,
  shadowRadius: 4.65,

  elevation: 10,
})
