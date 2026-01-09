import { Tabs } from "expo-router";
import { Colors } from "../_styles/AppStyles";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: "#111",
        tabBarInactiveTintColor: "rgba(0,0,0,0.45)",

        tabBarLabelStyle: {
          textTransform: "none",
          fontSize: 12,
          fontWeight: "600",
          paddingBottom:20,
        },

        tabBarStyle: {
          backgroundColor: Colors.tabBg,
          borderTopWidth: 1,
          borderTopColor: Colors.tabBorder,
          height: 64,
          paddingBottom: 10,
          paddingTop: 8,
        },
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="explore" options={{ title: "Explore" }} />
      <Tabs.Screen name="library" options={{ title: "Library" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
