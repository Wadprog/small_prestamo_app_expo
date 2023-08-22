import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import tw from "../../lib/tailwind";
import Setting from "../../components/Select";
import SettingSwitch from "./components/SettingSwitch";

const Messagesettings = () => {
  return (
    <View style={tw`py-5 px-2 gap-5`}>
      <Setting
        style={tw`bg-white`}
        placeholder="Payment Reminder calendar"
        items={[
          { value: 1, text: "1 Day Before" },
          { value: 2, text: "2 Day Before" },
          { value: 3, text: "3 Day Before" },
        ]}
        LeftIcon={() => (
          <MaterialCommunityIcons
            name="clock"
            size={24}
            color={tw.color("color-primary-500")}
          />
        )}
      />
      <Setting
        style={tw`bg-white`}
        placeholder="Prefered notification chanel"
        items={[
          { value: 1, text: "Email" },
          { value: 2, text: "Text" },
        ]}
        LeftIcon={() => (
          <MaterialCommunityIcons
            name="clock"
            size={24}
            color={tw.color("color-primary-500")}
          />
        )}
      />
      <SettingSwitch
        label="Switch to other channel?"
        LeftIcon={() => (
          <MaterialCommunityIcons
            name="dip-switch"
            size={24}
            color={tw.color("color-warning-500")}
          />
        )}
      />

      <SettingSwitch
        label="Notify on weekends?"
        LeftIcon={() => (
          <MaterialCommunityIcons
            name="calendar-remove"
            size={24}
            color={tw.color("color-danger-500")}
          />
        )}
      />
      <SettingSwitch
        label="Copy on notification?"
        LeftIcon={() => (
          <MaterialCommunityIcons
            name="content-copy"
            size={24}
            color={tw.color("color-success-500")}
          />
        )}
      />

      <Setting
        style={tw`bg-white`}
        placeholder="Prefered copy chanel"
        items={[
          { value: 1, text: "Email" },
          { value: 2, text: "Text" },
        ]}
        LeftIcon={() => (
          <MaterialCommunityIcons
            name="message-processing"
            size={24}
            color={tw.color("color-primary-500")}
          />
        )}
      />
    </View>
  );
};

export default Messagesettings;
