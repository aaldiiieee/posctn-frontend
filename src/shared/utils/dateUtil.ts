/**
 * Convert string date to indonesia date format (id-ID)
 * with timezone Asia/Jakarta
 * 
 * @param {string} date - Date form string
 * @returns 
 */
export function convertDate(date: string) {
  const newDate = new Date(date);

  return newDate.toLocaleString("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Jakarta",
  });
}
