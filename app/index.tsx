import { useEffect } from "react";
import { Text, View } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const t = setTimeout(() => router.replace("/(tabs)/home"), 700);
    return () => clearTimeout(t);
  }, [router]);

  return (
    
    <View className="flex-1 items-center justify-center bg-black">
    <Text className="text-red-500 text-4xl font-bold">STYLE TEST</Text>
w
      <Text className="text-white text-5xl font-semibold tracking-tight">ZERO</Text>
      <Text className="text-white/60 mt-3">mind • breath • space</Text>
    </View>
  );
}
