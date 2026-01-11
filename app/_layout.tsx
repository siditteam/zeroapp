import { Image } from "expo-image";
import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";
import { AuthProvider } from "./_providers/AuthProvider";

export default function RootLayout() {
  return (
    <AuthProvider>
      <View style={{ flex: 1 }}>
        {/* Cloud background */}
        <Image
          source={require("../assets/images/clouds.png")}
          style={StyleSheet.absoluteFill}
          contentFit="cover"
        />

        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: "transparent" },
          }}
        />
      </View>
    </AuthProvider>
  );
}
