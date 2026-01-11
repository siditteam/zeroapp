import { Image } from "expo-image";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
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
            contentPosition="center"
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

    // Looks “premium”
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,

    // spacing between logo area and content
    marginBottom: 12,
  },

  // ✅ THIS controls logo display size
  logo: {
    width: "100%",
    maxWidth: Metrics.logoMaxWidth,
    aspectRatio: Metrics.logoAspect,
    opacity: 0.95,
  },
});
