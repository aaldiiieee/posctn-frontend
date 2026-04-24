/**
 * Standard wrapper for API responses.
 *
 * @template T - Type of the `data` field
 */
export interface ApiResponse<T> {
  /** Indicates whether the request was successful */
  statusCode: number;
  /** Message from the backend (for UI or debugging) */
  message: string;
  /** Main payload */
  data: T;
  /** Timestamp of the response */
  timestamp: string;
}

/**
 * Standard error response from the API.
 */
export interface ApiErrorResponse {
  /** HTTP status code */
  status: number;
  /** Error message from the backend */
  error: string;
  /** Optional details about the error */
  path?: string;
  /** Timestamp of the error response */
  timestamp: string;
}