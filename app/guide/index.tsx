import React from "react";
import { Text, View } from "react-native";
import SkyScreen from "../_components/SkyScreen";
import { Typography } from "../_styles/AppStyles";

export default function Guide() {
  return (
    <SkyScreen>
      <View style={{ gap: 14 }}>
        <Text style={Typography.title}>AI Guide</Text>
        <Text style={Typography.subtitle}>
          Describe how you feel, and I’ll guide you to the right space.
        </Text>
      </View>
    </SkyScreen>
  );
}
