import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { PageHeader, PagePanel } from "../_components/Page";
import SkyScreen from "../_components/SkyScreen";
import { useAuth } from "../_providers/AuthProvider";
import { Buttons, Glass, Typography } from "../_styles/AppStyles";

export default function Profile() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();

  return (
    <SkyScreen>
      <PageHeader title="Profile" subtitle="Your progress & preferences." />

      <PagePanel>
        <View style={{ gap: 12 }}>
          <View style={Glass.card}>
            <Text style={Typography.cardTitle}>Status</Text>
            <Text style={Typography.cardSub}>
              {loading ? "Loading..." : user ? "Signed in" : "Guest"}
            </Text>
          </View>

          <View style={Glass.card}>
            <Text style={Typography.cardTitle}>Email</Text>
            <Text style={Typography.cardSub}>{user?.email ?? "Not signed in"}</Text>
          </View>

          <Pressable
            onPress={() => router.push("/settings")}
            style={Glass.card}
          >
            <Text style={Typography.cardTitle}>Settings</Text>
            <Text style={Typography.cardSub}>Audio, reminders, theme (later)</Text>
          </Pressable>

          {user ? (
            <Pressable
              onPress={async () => {
                await signOut();
                router.replace("/auth/login");
              }}
              style={[Buttons.base, Buttons.center, { backgroundColor: "rgba(255,255,255,0.28)" }]}
            >
              <Text style={Buttons.title}>Sign out</Text>
            </Pressable>
          ) : (
            <Pressable
              onPress={() => router.push("/auth/login")}
              style={[Buttons.base, Buttons.center, { backgroundColor: "rgba(255,255,255,0.28)" }]}
            >
              <Text style={Buttons.title}>Sign in</Text>
            </Pressable>
          )}
        </View>
      </PagePanel>
    </SkyScreen>
  );
}
