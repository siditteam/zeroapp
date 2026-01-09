import { Stack } from "expo-router";
import { Image, View, StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    <View style={{ flex: 1 }}>
      {/* CLOUD BACKGROUND */}
      <Image
        source={require("../assets/images/clouds.png")}
        style={StyleSheet.absoluteFill}
        resizeMode="cover"
      />

      {/* ROUTES ON TOP */}
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "transparent" },
        }}
      />
    </View>
  );
}
