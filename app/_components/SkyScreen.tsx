import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Colors, Layout, Metrics } from "../_styles/AppStyles";

export default function SkyScreen({ children }: { children: React.ReactNode }) {
  return (
    <View style={Layout.root}>
      {/* Full-screen background behind everything */}
      <Image
        source={require("../../assets/images/clouds.png")}
        style={StyleSheet.absoluteFill}
        contentFit="cover"
        contentPosition="center"
      />

      <ScrollView
        style={Layout.scroll}
        contentContainerStyle={Layout.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Full-bleed header strip behind logo */}
        <View style={[Layout.fullBleedRow, styles.headerStrip]}>
          <Image
            source={require("../../assets/images/main_logo.png")}
            style={styles.logo}
            contentFit="contain"
          />
        </View>

        {/* Constrained content */}
        <View style={Layout.container}>{children}</View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerStrip: {
    backgroundColor: Colors.headerBg,
    borderBottomWidth: 1,
    borderBottomColor: Colors.headerBorder,
    paddingVertical: Metrics.headerPadV,
    paddingHorizontal: Metrics.headerPadH,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
    borderRadius: 18,
  },
  logo: {
    width: "100%",
    maxWidth: Metrics.logoMaxWidth,
    aspectRatio: Metrics.logoAspect,
    opacity: 0.92,
  },
});
