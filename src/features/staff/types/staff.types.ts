/**
 * StaffResponse represents the structure of the response received when fetching 
 * staff data from the API. It includes details such as the staff member's 
 * ID, full name, username, role, active status, and the date they were created.
 * 
 * @interface StaffResponse
 * @property {number} id
 * @property {string} fullname
 * @property {string} username
 * @property {string} role
 * @property {boolean} active
 * @property {string} createdAt
 */
export interface StaffResponse {
  /** The unique identifier for the staff member. */
  id?: number;
  /** The full name of the staff member. */
  fullname: string;
  /** The username associated with the staff member's account. */
  username: string;
  /** The role assigned to the staff member (e.g., "admin", "staff"). */
  role: string;
  /** Indicates whether the staff member is currently active. */
  active: boolean;
  /** The date and time when the staff member was created, in ISO 8601 format. */
  createdAt: string;
}