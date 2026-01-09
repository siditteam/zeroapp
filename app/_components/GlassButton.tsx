import { Pressable, Text, View } from "react-native";

export function GlassButton({
  title,
  subtitle,
  onPress,
}: {
  title: string;
  subtitle?: string;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      className="rounded-3xl bg-white/14 border border-white/18 px-4 py-4 active:opacity-80"
    >
      <View className="gap-1">
        <Text className="text-white text-base font-semibold">{title}</Text>
        {!!subtitle && <Text className="text-white/70 text-sm">{subtitle}</Text>}
      </View>
    </Pressable>
  );
}
