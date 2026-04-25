import { AuthUser } from "@shared/types/auth.types";

/**
 * Defines the types for the authentication feature, including 
 * payloads for login and registration.
 */
export interface LoginPayload {
  /** The username of the user */
  username: string;
  /** The password of the user */
  password: string;
}

/**
 * Defines the structure of the response returned by the server upon successful login,
 * including the authentication token and its metadata.
 */
export interface LoginResponse {
  /** The authentication token returned by the server */
  token: string;
  /** The type of the token, e.g., "Bearer" */
  tokenType: string;
  /** The duration in seconds for which the token is valid */
  expiresIn: number;
  /** The authenticated user's data */
  user: AuthUser;
}

/**
 * Defines the structure of the error response returned by the server when a login attempt fails,
 * including the error code, message, and HTTP status.
 */
export interface LoginErrorResponse {
  /** The error message returned by the server */
  errorCode: string;
  /** A human-readable message describing the error */
  message: string;
  /** The HTTP status code associated with the error */
  status: number;
}