import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import { Colors, FontSizes, Shadows, Sizes } from "@shared/constants/themeConstants";

// ================================================================== Card ====

interface CardProps {
  children: React.ReactNode;
  onPress?: () => void;
  style?: ViewStyle;
}

function Card({ children, onPress, style }: CardProps) {
  if (onPress) {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.75}
        style={[styles.card, style]}
      >
        {children}
      </TouchableOpacity>
    );
  }
  return <View style={[styles.card, style]}>{children}</View>;
}

// ============================================================= CardHeader ===

interface CardHeaderProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

function CardHeader({ children, style }: CardHeaderProps) {
  return <View style={[styles.header, style]}>{children}</View>;
}

// ============================================================== CardTitle ===

interface CardTitleProps {
  children: React.ReactNode;
  style?: TextStyle;
}

function CardTitle({ children, style }: CardTitleProps) {
  return <Text style={[styles.title, style]}>{children}</Text>;
}

// ========================================================= CardDescription ==

interface CardDescriptionProps {
  children: React.ReactNode;
  style?: TextStyle;
}

function CardDescription({ children, style }: CardDescriptionProps) {
  return <Text style={[styles.description, style]}>{children}</Text>;
}

// ============================================================= CardAction ===

interface CardActionProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

function CardAction({ children, style }: CardActionProps) {
  return <View style={[styles.action, style]}>{children}</View>;
}

// ============================================================= CardContent ==

interface CardContentProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

function CardContent({ children, style }: CardContentProps) {
  return <View style={[styles.content, style]}>{children}</View>;
}

// ============================================================= CardFooter ===

interface CardFooterProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

function CardFooter({ children, style }: CardFooterProps) {
  return <View style={[styles.footer, style]}>{children}</View>;
}

// ============================================================= CardDivider ==

function CardDivider({ style }: { style?: ViewStyle }) {
  return <View style={[styles.divider, style]} />;
}

// ---------------------------------------------------------------- exports ---

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
  CardDivider,
};

// ------------------------------------------------------------------ styles --

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card.primary,
    borderRadius: Sizes.radius,
    borderWidth: 1,
    borderColor: Colors.border.primary,
    padding: Sizes.base * 2,
    ...Shadows.shadowLight,
    elevation: 2,
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    gap: Sizes.base,
    marginBottom: Sizes.base,
  },
  title: {
    // flex: 1,
    fontSize: FontSizes.xl,
    fontWeight: "600",
    color: Colors.text.secondary,
  },
  description: {
    width: "100%",
    fontSize: FontSizes.sm,
    color: Colors.text.primary,
    marginTop: 2,
  },
  action: {
    marginLeft: "auto",
  },
  content: {
    paddingVertical: Sizes.base,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    gap: Sizes.base,
    marginTop: Sizes.base,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.border.primary,
    marginVertical: Sizes.base * 1.5,
  },
});