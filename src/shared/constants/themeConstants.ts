/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

/** Tint Color Light */
const TINT_COLOR_LIGHT = '#0a7ea4';
/** Tint Color Dark */
const TINT_COLOR_DARK = '#fff';
/** Tab Icon Color Light */
const TAB_ICON_DEFAULT_LIGHT = '#687076';
/** Tab Icon Color Dark */
const TAB_ICON_DEFAULT_DARK = '#9BA1A6';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: TINT_COLOR_LIGHT,
    icon: TAB_ICON_DEFAULT_LIGHT,
    tabIconDefault: TAB_ICON_DEFAULT_LIGHT,
    tabIconSelected: TINT_COLOR_LIGHT,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: TINT_COLOR_DARK,
    icon: TAB_ICON_DEFAULT_DARK,
    tabIconDefault: TAB_ICON_DEFAULT_DARK,
    tabIconSelected: TINT_COLOR_DARK,
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  /** Shadow for Android */
  shadowDark: {
    elevation: 4,
    shadowColor: '#000',
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
  '2xl': 22,
  /** 28px — heading large / hero text */
  '3xl': 28,
  /** 34px — display text */
  '4xl': 34,
} as const;
