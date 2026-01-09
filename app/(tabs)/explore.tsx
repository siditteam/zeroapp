import { Pressable, Text, View } from "react-native";
import SkyScreen from "../_components/SkyScreen"; // adjust if your SkyScreen path differs
import { Glass, Layout, Typography, Buttons } from "../_styles/AppStyles"; // adjust path if needed

export default function ExploreScreen() {
  return (
    <SkyScreen>
      <View style={[Layout.screen, { width: "100%" }]}>
        {/* Header */}
        <View style={{ alignItems: "center", gap: 8 }}>
          <Text style={Typography.kicker}>EXPLORE</Text>
          <Text style={[Typography.title, Typography.centerText]}>Discover</Text>
          <Text style={[Typography.subtitle, Typography.centerText]}>
            New journeys and guided modes will appear here.
          </Text>
        </View>

        {/* Main Card */}
        <View style={[Glass.panel, { width: "100%" }]}>
          <Text style={Typography.cardTitle}>What’s coming</Text>
          <Text style={Typography.cardSub}>
            • Curated Mind Trek paths{"\n"}
            • Daily prompts + reflections{"\n"}
            • Guided modes (no voice, only text + sound)
          </Text>
        </View>

        {/* Actions */}
        <View style={[Layout.section, { width: "100%" }]}>
          <Pressable style={[Buttons.base, Buttons.strong]} onPress={() => {}}>
            <Text style={Buttons.title}>Start a discovery session</Text>
            <Text style={Buttons.sub}>A light, 2-minute reset</Text>
          </Pressable>

          <Pressable style={[Buttons.base]} onPress={() => {}}>
            <Text style={Buttons.title}>Browse concepts</Text>
            <Text style={Buttons.sub}>Focus • Presence • Letting go</Text>
          </Pressable>
        </View>
      </View>
    </SkyScreen>
  );
}
