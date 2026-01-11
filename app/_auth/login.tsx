import * as Linking from "expo-linking";
import { Link, useRouter } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import React, { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import SkyScreen from "../_components/SkyScreen";
import { supabase } from "../_lib/supabase";
import { Buttons, Glass, Typography } from "../_styles/AppStyles";

WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  const signIn = async () => {
    setBusy(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setBusy(false);

    if (error) return Alert.alert("Login failed", error.message);
    router.replace("/(tabs)");
  };

  const googleSignIn = async () => {
    setBusy(true);

    // ✅ This must be a real route: app/auth/callback.tsx
    const redirectTo = Linking.createURL("/auth/callback");

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo,
        // optional: request offline access prompt, if you want refresh tokens
        // queryParams: { access_type: "offline", prompt: "consent" },
      },
    });

    setBusy(false);

    if (error) return Alert.alert("Google login failed", error.message);
    if (data?.url) {
      const res = await WebBrowser.openAuthSessionAsync(data.url, redirectTo);
      // If user completes auth, Supabase will redirect to /auth/callback with code
      if (res.type === "dismiss") return;
    }
  };

  return (
    <SkyScreen>
      <View style={{ gap: 14 }}>
        <Text style={Typography.title}>Welcome back</Text>
        <Text style={Typography.subtitle}>Sign in to continue your Zero journey.</Text>

        <View style={[Glass.panel, { gap: 10 }]}>
          <TextInput
            placeholder="Email"
            autoCapitalize="none"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            style={{ paddingVertical: 12 }}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={{ paddingVertical: 12 }}
          />
        </View>

        <Pressable onPress={signIn} style={[Buttons.base, Buttons.center, busy && { opacity: 0.6 }]}>
          <Text style={Buttons.title}>{busy ? "Signing in..." : "Sign in"}</Text>
        </Pressable>

        <Pressable
          onPress={googleSignIn}
          style={[Buttons.base, Buttons.center, { backgroundColor: "rgba(255,255,255,0.35)" }]}
        >
          <Text style={Buttons.title}>{busy ? "Opening Google..." : "Continue with Google"}</Text>
        </Pressable>

        <Text style={Typography.subtitle}>
          Don&apos;t have an account? <Link href="/auth/signup">Create one</Link>
        </Text>
      </View>
    </SkyScreen>
  );
}
