import React, { useEffect, useRef, useState } from "react";
import { Animated, Pressable, Text, View } from "react-native";
import SkyScreen from "../_components/SkyScreen";
import { Glass, Practice, Typography } from "../_styles/AppStyles";

export default function Breathe() {
  const scale = useRef(new Animated.Value(1)).current;
  const [running, setRunning] = useState(false);
  const [phase, setPhase] = useState("Ready");

  useEffect(() => {
    if (!running) return;

    let mounted = true;
    const loop = () => {
      if (!mounted) return;
      setPhase("Inhale");
      Animated.timing(scale, { toValue: 1.15, duration: 4000, useNativeDriver: true }).start(() => {
        if (!mounted) return;
        setPhase("Exhale");
        Animated.timing(scale, { toValue: 1, duration: 6000, useNativeDriver: true }).start(loop);
      });
    };
    loop();

    return () => {
      mounted = false;
      scale.stopAnimation();
      scale.setValue(1);
      setPhase("Ready");
    };
  }, [running]);

  return (
    <SkyScreen>
      <View style={{ gap: 14 }}>
        <Text style={Typography.title}>Breathe</Text>
        <Text style={Typography.subtitle}>In 4 · Out 6</Text>

        <Animated.View style={{ transform: [{ scale }] }}>
          <View style={Practice.ring} />
        </Animated.View>

        <Text style={[Typography.subtitle, Typography.centerText]}>{phase}</Text>

        <Pressable style={Glass.button} onPress={() => setRunning((v) => !v)}>
          <Text style={Typography.cardTitle}>{running ? "Stop" : "Start"}</Text>
        </Pressable>
      </View>
    </SkyScreen>
  );
}
