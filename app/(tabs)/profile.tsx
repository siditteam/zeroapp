import React from "react";
import { Pressable, Text, View } from "react-native";
import SkyScreen from "../_components/SkyScreen";
import { PageHeader, PagePanel } from "../_components/Page";
import { Glass, Typography } from "../_styles/AppStyles";

export default function Profile() {
  return (
    <SkyScreen>
      <PageHeader title="Profile" subtitle="Your progress & preferences." />

      <PagePanel>
        <View style={{ gap: 12 }}>
          <Pressable style={Glass.card}>
            <Text style={Typography.cardTitle}>Name</Text>
            <Text style={Typography.cardSub}>SAKI</Text>
          </Pressable>

          <Pressable style={Glass.card}>
            <Text style={Typography.cardTitle}>Total Silence</Text>
            <Text style={Typography.cardSub}>0 min</Text>
          </Pressable>

          <Pressable style={Glass.card}>
            <Text style={Typography.cardTitle}>Settings</Text>
            <Text style={Typography.cardSub}>Audio, reminders, theme (later)</Text>
          </Pressable>
        </View>
      </PagePanel>
    </SkyScreen>
  );
}
