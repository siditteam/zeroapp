import React, { useEffect, useRef, useState } from "react";
import { Animated, Pressable, Text, View } from "react-native";
import SkyScreen from "../_components/SkyScreen";
import { Glass, Practice, Typography } from "../_styles/AppStyles";

export default function Space() {
  const pulse = useRef(new Animated.Value(1)).current;
  const [running, setRunning] = useState(false);
  const [sec, setSec] = useState(0);

  useEffect(() => {
    if (!running) return;

    const timer = setInterval(() => setSec((s) => s + 1), 1000);

    const anim = Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, { toValue: 1.05, duration: 2000, useNativeDriver: true }),
        Animated.timing(pulse, { toValue: 1, duration: 2000, useNativeDriver: true }),
      ])
    );
    anim.start();

    return () => {
      clearInterval(timer);
      anim.stop();
      pulse.setValue(1);
    };
  }, [running]);

  return (
    <SkyScreen>
      <View style={{ gap: 14 }}>
        <Text style={Typography.title}>The Space</Text>
        <Text style={Typography.subtitle}>Silence & stillness</Text>

        <Animated.View style={{ transform: [{ scale: pulse }] }}>
          <View style={Practice.ringCenter}>
            <Text style={Practice.time}>{sec}s</Text>
          </View>
        </Animated.View>

        <Pressable style={Glass.button} onPress={() => setRunning((v) => !v)}>
          <Text style={Typography.cardTitle}>{running ? "Pause" : "Start"}</Text>
        </Pressable>
      </View>
    </SkyScreen>
  );
}
