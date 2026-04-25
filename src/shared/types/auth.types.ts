/**
 * Basic user data used in authentication.
 */
export interface AuthUser {
  /** User id */
  id: number;
  /** User full name */
  name: string;
  /** User full name */
  fullname: string;
  /** User role */
  role: string;
}

/**
 * Value provided by Auth Context.
 * Used to manage auth state in the app.
 */
export interface AuthContextValue {
  /** Current logged-in user (null if not logged in) */
  user: AuthUser | null;
  /** True if user is logged in */
  isAuthenticated: boolean;
  /** True while checking or loading auth state */
  isLoading: boolean;

  /**
   * Save user and token after login.
   * @param user user data
   * @param token auth token
   */
  signIn: (user: AuthUser, token: string) => Promise<void>;

  /**
   * Clear user data and token.
   */
  signOut: () => Promise<void>;
}
