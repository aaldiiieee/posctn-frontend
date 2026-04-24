import Constants from "expo-constants";

/**
 * Application environment variables taken from `app.json` extra
 * or `eas.json` build profile.
 *
 * All access to env variables in the app must go through here —
 * do not access `process.env` or `Constants.expoConfig` directly.
 *
 * @example
 * import { ENV } from '@shared/config/env';
 * console.log(ENV.API_BASE_URL);
 */
export const ENV = {
  /** Base URL for the backend API */
  API_BASE_URL: Constants.expoConfig?.extra?.apiBaseUrl as string,
  /** Environment name which is running */
  APP_ENV: Constants.expoConfig?.extra?.appEnv ?? 'development' as 
    | 'development'
    | 'staging'
    | 'production',
  /** Current app version */
  APP_VERSION: Constants.expoConfig?.extra?.version as string,
} as const;

/** Check the current environment in a production  */
export const IS_PROD = ENV.APP_ENV === 'production';

/** Check if the app is running in staging environment */
export const IS_STAGING = ENV.APP_ENV === 'staging';