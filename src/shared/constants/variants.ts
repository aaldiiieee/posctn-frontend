import { Colors } from "@shared/constants/themeConstants";

export type BadgeVariant = "success" | "warning" | "danger" | "info" | "neutral";
export type ButtonVariant = "primary" | "secondary" | "danger";

export const BADGE_VARIANTS: Record<BadgeVariant, { bg: string; text: string }> = {
  success: { bg: "#D1FAE5", text: "#065F46" },
  warning: { bg: "#FEF3C7", text: "#92400E" },
  danger:  { bg: "#FEE2E2", text: "#991B1B" },
  info:    { bg: "#DBEAFE", text: "#1E40AF" },
  neutral: { bg: Colors.border.primary, text: Colors.text.primary },
};

export const BUTTON_VARIANTS: Record<
  ButtonVariant,
  { bg: string; text: string; border?: string }
> = {
  primary:   { bg: Colors.button.primary,   text: Colors.button.textPrimary },
  secondary: { bg: Colors.button.secondary, text: Colors.text.secondary, border: Colors.border.primary },
  danger:    { bg: "#FEE2E2",               text: Colors.button.danger },
};

export const AVATAR_PALETTE = [
  "#A43537", "#C0664E", "#7B5EA7",
  "#3A7BD5", "#2E9E6B", "#D4873A", "#5E8D8A",
];