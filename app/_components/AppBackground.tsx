import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function AppBackground({ children }: { children: React.ReactNode }) {
  return (
    <View style={styles.root}>
      <LinearGradient
        colors={["#7FEFE6", "#9AF3EB", "#B7FBF3"]}
        start={{ x: 0.2, y: 0 }}
        end={{ x: 0.8, y: 1 }}
        style={StyleSheet.absoluteFill}
      />

      {/* IMPORTANT: cover + absoluteFill + opacity */}
      <Image
        source={require("../../assets/images/clouds.png")}
        style={[StyleSheet.absoluteFill, { opacity: 0.42 }]}
        resizeMode="cover"
        fadeDuration={0}
      />

      {/* Content */}
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  content: { flex: 1 },
});
