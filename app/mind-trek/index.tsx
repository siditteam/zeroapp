import React from "react";
import { Pressable, Text, View } from "react-native";
import { useRouter } from "expo-router";
import SkyScreen from "../_components/SkyScreen";
import { Glass, Typography } from "../_styles/AppStyles";

export default function MindTrek() {
  const router = useRouter();

  return (
    <SkyScreen>
      <View style={{ gap: 14 }}>
        <Text style={Typography.title}>Mind Trek</Text>
        <Text style={Typography.subtitle}>Choose a short guided practice.</Text>

        <Pressable style={Glass.card} onPress={() => router.push("/mind-trek/breathe")}>
          <Text style={Typography.cardTitle}>Breathe</Text>
          <Text style={Typography.cardSub}>In 4 · Out 6</Text>
        </Pressable>
      </View>
    </SkyScreen>
  );
}
