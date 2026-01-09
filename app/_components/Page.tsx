import React from "react";
import { View, Text } from "react-native";
import { Glass, Typography } from "../_styles/AppStyles";

export function PageHeader({
  title,
  subtitle,
  center = false,
}: {
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <View style={{ gap: 6 }}>
      <Text style={[Typography.title, center && Typography.centerText]}>{title}</Text>
      {!!subtitle && (
        <Text style={[Typography.subtitle, center && Typography.centerText]}>{subtitle}</Text>
      )}
    </View>
  );
}

export function PagePanel({ children }: { children: React.ReactNode }) {
  return <View style={Glass.panel}>{children}</View>;
}
