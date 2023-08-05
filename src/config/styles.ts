import { Platform } from 'react-native';
import tw from '../lib/tailwind';

// Custom dependencies
import colors from './colors';

export default {
  colors,
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
  my_1: {
    marginVertical: 15,
  },
  input: tw`bg-white text-base-100 placeholder:text-base-100 font-semibold rounded  border-0 invalid:text-red-500 autofill:text-base-100 autofill:bg-blue-200`,
};
