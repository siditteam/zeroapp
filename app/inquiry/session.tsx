import React, { useEffect, useMemo, useRef, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Svg, { Circle } from "react-native-svg";
import SkyScreen from "../_components/SkyScreen";
import { Colors, Glass, Typography } from "../_styles/AppStyles";

const DURATION_SEC = 15;

const PROMPTS = [
  "What am I feeling right now?",
  "Where do I feel it in the body?",
  "What happens if I don't fix it—only watch it?",
  "Who is noticing this experience?",
];

function clamp(n: number, a: number, b: number) {
  return Math.max(a, Math.min(b, n));
}

export default function InquirySession() {
  const [promptIndex, setPromptIndex] = useState(0);

  // timer
  const [running, setRunning] = useState(true);
  const [remaining, setRemaining] = useState(DURATION_SEC);

  // we track total elapsed (including pauses) properly
  const startTsRef = useRef<number | null>(null);
  const pausedElapsedRef = useRef(0); // seconds already elapsed before resume
  const rafRef = useRef<number | null>(null);

  const prompt = PROMPTS[promptIndex] ?? PROMPTS[0];

  // ring math
  const size = 140;
  const stroke = 10;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;

  const progress = useMemo(() => {
    const done = 1 - remaining / DURATION_SEC;
    return clamp(done, 0, 1);
  }, [remaining]);

  useEffect(() => {
    // stop animation when paused
    if (!running) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      return;
    }

    // start/resume
    startTsRef.current = Date.now();

    const tick = () => {
      const now = Date.now();
      const elapsedThisRun = (now - (startTsRef.current ?? now)) / 1000;
      const totalElapsed = pausedElapsedRef.current + elapsedThisRun;

      const newRemaining = Math.ceil(DURATION_SEC - totalElapsed);
      setRemaining(clamp(newRemaining, 0, DURATION_SEC));

      if (totalElapsed >= DURATION_SEC) {
        setRunning(false);
        setRemaining(0);
        pausedElapsedRef.current = DURATION_SEC; // lock
        return;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [running, promptIndex]);

  const pause = () => {
    // capture elapsed up to pause moment
    const now = Date.now();
    const elapsedThisRun =
      startTsRef.current ? (now - startTsRef.current) / 1000 : 0;
    pausedElapsedRef.current = clamp(
      pausedElapsedRef.current + elapsedThisRun,
      0,
      DURATION_SEC
    );

    setRunning(false);
  };

  const resume = () => {
    setRunning(true);
  };

  const restart = () => {
    pausedElapsedRef.current = 0;
    startTsRef.current = null;
    setRemaining(DURATION_SEC);
    setRunning(true);
  };

  const nextPrompt = () => {
    const next = (promptIndex + 1) % PROMPTS.length;
    setPromptIndex(next);

    // reset timer for new prompt
    pausedElapsedRef.current = 0;
    startTsRef.current = null;
    setRemaining(DURATION_SEC);
    setRunning(true);
  };

  return (
    <SkyScreen>
      <View style={styles.root}>
        {/* Header */}
        <View style={{ gap: 6 }}>
          <Text style={Typography.title}>Inquiry</Text>
          <Text style={Typography.subtitle}>Witness. Don’t solve.</Text>
        </View>

        {/* Prompt Card */}
        <View style={[Glass.card, styles.promptCard]}>
          <Text style={styles.kicker}>PROMPT</Text>
          <Text style={styles.promptText}>{prompt}</Text>
          <Text style={Typography.subtitle}>
            Let the answer arise. Stay with sensation. No effort.
          </Text>
        </View>

        {/* Progress Ring */}
        <View style={styles.ringWrap}>
          <Svg width={size} height={size}>
            <Circle
              cx={size / 2}
              cy={size / 2}
              r={r}
              stroke="rgba(255,255,255,0.25)"
              strokeWidth={stroke}
              fill="transparent"
            />
            <Circle
              cx={size / 2}
              cy={size / 2}
              r={r}
              stroke="rgba(255,255,255,0.85)"
              strokeWidth={stroke}
              fill="transparent"
              strokeDasharray={`${c} ${c}`}
              strokeDashoffset={c * (1 - progress)}
              strokeLinecap="round"
              rotation="-90"
              originX={size / 2}
              originY={size / 2}
            />
          </Svg>

          <View style={styles.ringCenter}>
            <Text style={styles.seconds}>{remaining}</Text>
            <Text style={styles.secondsLabel}>seconds</Text>
          </View>
        </View>

        {/* Controls */}
        <View style={{ gap: 12 }}>
          {running ? (
            <Pressable onPress={pause} style={styles.btn}>
              <Text style={styles.btnTitle}>Pause</Text>
              <Text style={styles.btnSub}>Hold the moment</Text>
            </Pressable>
          ) : (
            <Pressable onPress={resume} style={styles.btn}>
              <Text style={styles.btnTitle}>Resume</Text>
              <Text style={styles.btnSub}>Continue witnessing</Text>
            </Pressable>
          )}

          <Pressable onPress={nextPrompt} style={[styles.btn, styles.btnStrong]}>
            <Text style={styles.btnTitle}>Next prompt</Text>
            <Text style={styles.btnSub}>New direction, same stillness</Text>
          </Pressable>

          <Pressable onPress={restart} style={[styles.btn, styles.btnGhost]}>
            <Text style={styles.btnTitle}>Restart</Text>
            <Text style={styles.btnSub}>Start this prompt again</Text>
          </Pressable>
        </View>
      </View>
    </SkyScreen>
  );
}

const styles = StyleSheet.create({
  root: { gap: 18 },

  promptCard: {
    gap: 10,
    // slight emphasis over default glass
    backgroundColor: "rgba(255,255,255,0.18)",
  },
  kicker: {
    fontSize: 12,
    letterSpacing: 3,
    color: "rgba(0,0,0,0.45)",
    fontWeight: "700",
  },
  promptText: {
    fontSize: 20,
    fontWeight: "700",
    color: Colors.textPrimary,
  },

  ringWrap: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
    alignSelf: "center",
  },
  ringCenter: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  seconds: {
    fontSize: 34,
    fontWeight: "700",
    color: Colors.textPrimary,
  },
  secondsLabel: {
    marginTop: 2,
    color: Colors.textSecondary,
  },

  btn: {
    borderRadius: 22,
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: "rgba(255,255,255,0.18)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.26)",
  },
  btnStrong: {
    backgroundColor: "rgba(255,255,255,0.22)",
    borderColor: "rgba(255,255,255,0.30)",
  },
  btnGhost: {
    backgroundColor: "rgba(255,255,255,0.12)",
  },
  btnTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.textPrimary,
  },
  btnSub: {
    marginTop: 3,
    color: Colors.textSecondary,
  },
});
