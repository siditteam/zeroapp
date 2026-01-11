import * as Linking from "expo-linking";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import SkyScreen from "../_components/SkyScreen";
import { supabase } from "../_lib/supabase";
import { Typography } from "../_styles/AppStyles";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const run = async () => {
      try {
        // On web/native: this gives us the URL that contains ?code=...
        const url = await Linking.getInitialURL();

        if (!url) {
          router.replace("/auth/login");
          return;
        }

        // ✅ Supabase v2: exchanges the OAuth code for a session
        const { error } = await supabase.auth.exchangeCodeForSession(url);
        if (error) {
          router.replace("/auth/login");
          return;
        }

        router.replace("/(tabs)");
      } catch {
        router.replace("/auth/login");
      }
    };

    run();
  }, [router]);

  return (
    <SkyScreen>
      <View style={{ alignItems: "center", gap: 12, paddingTop: 28 }}>
        <ActivityIndicator />
        <Text style={Typography.subtitle}>Signing you in…</Text>
      </View>
    </SkyScreen>
  );
}
