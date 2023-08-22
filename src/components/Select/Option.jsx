import { TouchableOpacity } from "react-native";
import React from "react";

import Text from "../Text";
import tw from "../../lib/tailwind";

const Option = ({ LeftIcon, style, value, text, onPress }) => {
  return (
    <TouchableOpacity
      style={[tw`my-1 p-2 rounded-lg gap-2`, style]}
      onPress={() => onPress(value)}
    >
      {LeftIcon && <LeftIcon />}
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default Option;
