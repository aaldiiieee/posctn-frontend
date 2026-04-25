import React from "react";
import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { avatarColorFromName, getInitials } from "@shared/utils/charUtil";

interface AvatarProps {
  name: string;
  size?: number;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export function Avatar({ name, size = 44, style, textStyle }: AvatarProps) {
  const fontSize = size * 0.35;

  return (
    <View
      style={[
        styles.avatar,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: avatarColorFromName(name),
        },
        style,
      ]}
    >
      <Text style={[styles.text, { fontSize }, textStyle]}>
        {getInitials(name)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
  },
  text: {
    color: "#FFFFFF",
    fontWeight: "700",
    letterSpacing: 0.5,
  },
});