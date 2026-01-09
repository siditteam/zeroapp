import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import SkyScreen from "../_components/SkyScreen";
import { Glass, Typography } from "../_styles/AppStyles";

function Card({
  title,
  subtitle,
  onPress,
}: {
  title: string;
  subtitle: string;
  onPress: () => void;
}) {
  return (
    <Pressable onPress={onPress} style={Glass.card}>
      <Text style={Typography.cardTitle}>{title}</Text>
      <Text style={Typography.cardSub}>{subtitle}</Text>
    </Pressable>
  );
}

export default function Home() {
  const router = useRouter();

  return (
    <SkyScreen>
      <View style={{ gap: 10 }}>
        <Text style={[Typography.kicker, Typography.centerText]}>WELCOME BACK</Text>
        <Text style={[Typography.bigName, Typography.centerText]}>SAKI</Text>
        <Text style={[Typography.subtitle, Typography.centerText]}>What is the energy today?</Text>
      </View>

      <View style={styles.panelWrap}>
        <View style={Glass.panel}>
          <Card title="Inquiry" subtitle="Who am I right now?" onPress={() => router.push("/inquiry")} />
          <Card title="Mind Trek" subtitle="Breathe, focus, imagine" onPress={() => router.push("/mind-trek")} />
          <Card title="The Space" subtitle="Silence & stillness" onPress={() => router.push("/space")} />
          <Card title="Library" subtitle="Quotes & sessions" onPress={() => router.push("/(tabs)/library")} />
          <Card title="AI Guide" subtitle="Tell me what you need" onPress={() => router.push("/guide")} />
        </View>
      </View>
    </SkyScreen>
  );
}

const styles = StyleSheet.create({
  panelWrap: { marginTop: 10 },
});
