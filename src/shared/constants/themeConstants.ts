/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from "react-native";

const TAB_ICON_DEFAULT_LIGHT = "#687076";
const TAB_ICON_DEFAULT_DARK = "#9BA1A6";

const BACKGROUND_COLOR_LIGHT_PRIMARY = "#fff";
const BACKGROUND_COLOR_LIGHT_SECONDARY = "#F5F5F5";
const BACKGROUND_COLOR_DARK_PRIMARY = "#151718";
const BACKGROUND_COLOR_DARK_SECONDARY = "#2A2C2D";

const BUTTON_PRIMARY_LIGHT = "#006684";
const BUTTON_PRIMARY_DARK = "#004D64";
const BUTTON_SECONDARY_LIGHT = "#E0E0E0";
const BUTTON_SECONDARY_DARK = "#3F484D";
const BUTTON_DANGER = "#db2326";

const LABEL_INPUT_COLOR_PRIMARY_LIGHT = "#11181C";
const LABEL_INPUT_COLOR_SECONDARY_LIGHT = "#004D64";
const LABEL_INPUT_COLOR_PRIMARY_DARK = "#ECEDEE";
const LABEL_INPUT_COLOR_SECONDARY_DARK = "#004D64";

const TEXT_COLOR_PRIMARY_LIGHT = "#11181C";
const TEXT_COLOR_SECONDARY_LIGHT = "#004D64";
const TEXT_COLOR_PRIMARY_DARK = "#ECEDEE";

export const Colors = {
  light: {
    text: {
      primary: TEXT_COLOR_PRIMARY_LIGHT,
      secondary: TEXT_COLOR_SECONDARY_LIGHT,
    },
    background: {
      primary: BACKGROUND_COLOR_LIGHT_PRIMARY,
      secondary: BACKGROUND_COLOR_LIGHT_SECONDARY,
    },
    button: {
      primary: BUTTON_PRIMARY_LIGHT,
      secondary: BUTTON_SECONDARY_LIGHT,
      danger: BUTTON_DANGER,
      textPrimary: "#FFFFFF",
      textSecondary: "#11181C",
    },
    label: {
      primary: LABEL_INPUT_COLOR_PRIMARY_LIGHT,
      secondary: LABEL_INPUT_COLOR_SECONDARY_LIGHT,
    },
    tabIcon: {
      default: TAB_ICON_DEFAULT_LIGHT,
      active: BUTTON_PRIMARY_LIGHT,
    },
  },

  dark: {
    text: {
      primary: TEXT_COLOR_PRIMARY_DARK,
    },
    background: {
      primary: BACKGROUND_COLOR_DARK_PRIMARY,
      secondary: BACKGROUND_COLOR_DARK_SECONDARY,
    },
    button: {
      primary: BUTTON_PRIMARY_DARK,
      secondary: BUTTON_SECONDARY_DARK,
      danger: BUTTON_DANGER,
      textPrimary: "#FFFFFF",
      textSecondary: "#ECEDEE",
    },
    label: {
      primary: LABEL_INPUT_COLOR_PRIMARY_DARK,
      secondary: LABEL_INPUT_COLOR_SECONDARY_DARK,
    },
    tabIcon: {
      default: TAB_ICON_DEFAULT_DARK,
      active: BUTTON_PRIMARY_DARK,
    },
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
