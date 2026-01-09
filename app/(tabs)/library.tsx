import React from "react";
import { Pressable, Text } from "react-native";
import SkyScreen from "../_components/SkyScreen";
import { PageHeader, PagePanel } from "../_components/Page";
import { Glass, Typography } from "../_styles/AppStyles";

function QuoteCard({ author, text }: { author: string; text: string }) {
  return (
    <Pressable style={Glass.card}>
      <Text style={Typography.cardTitle}>{author}</Text>
      <Text style={Typography.cardSub}>{text}</Text>
    </Pressable>
  );
}

export default function Library() {
  return (
    <SkyScreen>
      <PageHeader title="Library" subtitle="Quotes & sessions (audio later)." />

      <PagePanel>
        <QuoteCard author="Rumi" text="Let the beauty we love be what we do." />
        <QuoteCard author="Bulleh Shah" text="Let yourself be silently drawn by the strange pull of what you love." />
        <QuoteCard author="Guru Nanak" text="Truth is high, but higher still is truthful living." />
      </PagePanel>
    </SkyScreen>
  );
}
