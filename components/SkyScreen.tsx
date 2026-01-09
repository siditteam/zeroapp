import { ScrollView, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function SkyScreen({ children }: { children: React.ReactNode }) {
  return (
    <LinearGradient
      colors={["#7FEFE6", "#9AF3EB", "#B7FBF3"]}
      start={{ x: 0.2, y: 0 }}
      end={{ x: 0.8, y: 1 }}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ paddingHorizontal: 18, paddingTop: 22, paddingBottom: 40 }}>
        <View className="gap-4">{children}</View>
      </ScrollView>
    </LinearGradient>
  );
}
