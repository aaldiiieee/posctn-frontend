import React from "react";
import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { FontSizes, Sizes } from "@shared/constants/themeConstants";
import { BadgeVariant, BADGE_VARIANTS } from "@shared/constants/variants";

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export function Badge({ label, variant = "neutral", style, textStyle }: BadgeProps) {
  const { bg, text } = BADGE_VARIANTS[variant];

  return (
    <View style={[styles.badge, { backgroundColor: bg }, style]}>
      <Text style={[styles.text, { color: text }, textStyle]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: Sizes.base,
    paddingVertical: 3,
    borderRadius: 999,
    alignSelf: "flex-start",
  },
  text: {
    fontSize: FontSizes.xs,
    fontWeight: "600",
    letterSpacing: 0.3,
  },
});