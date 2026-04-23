/**
 * Sanitizes a phone number for use in a tel: link.
 * Removes all characters except digits and +.
 * This ensures a valid and safe tel: URI.
 * @param {string} phone
 * @returns {string}
 */
export function sanitizePhone(phone) {
  if (!phone) return '';
  return phone.replace(/[^\d+]/g, '');
}

/**
 * Sanitizes an email address for use in a mailto: link.
 * Strips potentially dangerous characters that could be used for attribute injection.
 * @param {string} email
 * @returns {string}
 */
export function sanitizeEmail(email) {
  if (!email) return '';
  // Strips quotes, brackets, backslashes, percent signs, newlines, angle brackets, spaces, and equals signs
  return email.replace(/["'[\]\\%<> \n\r=]/g, '');
}
