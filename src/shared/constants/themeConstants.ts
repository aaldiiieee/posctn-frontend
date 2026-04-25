/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from "react-native";

const TAB_ICON_DEFAULT = "#687076";

const BACKGROUND_COLOR_PRIMARY = "#FFF8F5";
const BACKGROUND_COLOR_SECONDARY = "#F5F5F5";
const BACKGROUND_HEADER_COLOR_PRIMARY = "#FFEDD5";
const BACKGROUND_CARD_PRIMARY = "#FFFFFF";
const BUTTON_PRIMARY = "#A43537";
const BUTTON_SECONDARY = "#F9E6D1";
const BUTTON_DANGER = "#db2326";
const LABEL_INPUT_COLOR_PRIMARY = "#574140";
const LABEL_INPUT_COLOR_SECONDARY = "#1E1B18";
const TEXT_COLOR_PRIMARY = "#574140";
const TEXT_COLOR_SECONDARY = "#1E1B18";
const TEXT_INPUT_COLOR_PRIMARY = "#FFF8F5";
const BORDER_COLOR_PRIMARY = "#EFDDC8";

export const Colors = {
  text: {
    primary: TEXT_COLOR_PRIMARY,
    secondary: TEXT_COLOR_SECONDARY,
  },
  background: {
    primary: BACKGROUND_COLOR_PRIMARY,
    secondary: BACKGROUND_COLOR_SECONDARY,
  },
  card: {
    primary: BACKGROUND_CARD_PRIMARY,
  },
  border: {
    primary: BORDER_COLOR_PRIMARY,
  },
  header: {
    primary: BACKGROUND_HEADER_COLOR_PRIMARY,
  },
  button: {
    primary: BUTTON_PRIMARY,
    secondary: BUTTON_SECONDARY,
    danger: BUTTON_DANGER,
    textPrimary: "#FFFFFF",
    textSecondary: "#11181C",
  },
  label: {
    primary: LABEL_INPUT_COLOR_PRIMARY,
    secondary: LABEL_INPUT_COLOR_SECONDARY,
  },
  textInput: {
    primary: TEXT_INPUT_COLOR_PRIMARY,
  },
  tabIcon: {
    default: TAB_ICON_DEFAULT,
    active: BUTTON_PRIMARY,
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: "system-ui",
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: "ui-serif",
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: "ui-rounded",
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});

export const Sizes = {
  /** Base size for padding and margin */
  base: 8,
  /** Font size for body text */
  font: 16,
  /** Border radius for buttons and cards */
  radius: 12,
};

export const Shadows = {
  /** Shadow for iOS */
  shadowLight: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  /** Shadow for Android */
  shadowDark: {
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
};

/**
 * Standard font sizes for the app.
 * You can use these font sizes in your styles like this:
 *
 * @example
 * style={{ fontSize: FontSizes.md }}
 */
export const FontSizes = {
  /** 11px — small label, caption, error message */
  xs: 11,
  /** 12px — label form, hint text, badge */
  sm: 12,
  /** 14px — body text secondary, subtitle */
  md: 14,
  /** 16px — body text primary (default) */
  lg: 16,
  /** 18px — subheading, card title */
  xl: 18,
  /** 22px — heading page */
  "2xl": 22,
  /** 28px — heading large / hero text */
  "3xl": 28,
  /** 34px — display text */
  "4xl": 34,
} as const;
