import React from "react";
import { Pressable, Text, View } from "react-native";
import { useRouter } from "expo-router";
import SkyScreen from "../_components/SkyScreen";
import { Glass, Typography } from "../_styles/AppStyles";

export default function Inquiry() {
  const router = useRouter();

  return (
    <SkyScreen>
      <View style={{ gap: 14 }}>
        <Text style={Typography.title}>Inquiry</Text>
        <Text style={Typography.subtitle}>
          Sit for a moment and notice what is present without changing it.
        </Text>

        <Pressable style={Glass.card} onPress={() => router.push("/inquiry/session")}>
          <Text style={Typography.cardTitle}>Start Inquiry</Text>
          <Text style={Typography.cardSub}>15 seconds of observation</Text>
        </Pressable>
      </View>
    </SkyScreen>
  );
}
