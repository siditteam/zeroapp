import { Tabs, useRouter } from "expo-router";
import { useEffect } from "react";
import { useAuth } from "../_providers/AuthProvider";
import { Colors } from "../_styles/AppStyles";

export default function TabsLayout() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;
    if (!user) router.replace("/auth/login");
  }, [user, loading, router]);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: { textTransform: "none", fontSize: 12, fontWeight: "600" },
        tabBarStyle: {
          backgroundColor: Colors.tabBg,
          borderTopColor: Colors.tabBorder,
          borderTopWidth: 1,
          height: 62,
          paddingTop: 8,
          paddingBottom: 8,
        },
        tabBarActiveTintColor: "rgba(0,0,0,0.90)",
        tabBarInactiveTintColor: "rgba(0,0,0,0.45)",
      }}
    />
  );
}
