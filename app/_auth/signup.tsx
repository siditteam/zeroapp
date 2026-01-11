import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import SkyScreen from "../_components/SkyScreen";
import { supabase } from "../_lib/supabase";
import { Buttons, Glass, Typography } from "../_styles/AppStyles";

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  const signUp = async () => {
    setBusy(true);
    const { error } = await supabase.auth.signUp({ email, password });
    setBusy(false);

    if (error) return Alert.alert("Signup failed", error.message);

    Alert.alert("Check your email", "Confirm your email, then login.");
    router.replace("/auth/login");
  };

  return (
    <SkyScreen>
      <View style={{ gap: 14 }}>
        <Text style={Typography.title}>Create account</Text>
        <Text style={Typography.subtitle}>Start your Zero journey.</Text>

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

        <Pressable onPress={signUp} style={[Buttons.base, Buttons.center, busy && { opacity: 0.6 }]}>
          <Text style={Buttons.title}>{busy ? "Creating..." : "Create account"}</Text>
        </Pressable>

        <Text style={Typography.subtitle}>
          Already have an account? <Link href="/auth/login">Sign in</Link>
        </Text>
      </View>
    </SkyScreen>
  );
}
