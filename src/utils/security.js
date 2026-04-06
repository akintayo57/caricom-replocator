/**
 * Sanitizes phone numbers for use in tel: links.
 * Restricts characters to digits, +, -, and parentheses.
 * @param {string} phone
 * @returns {string}
 */
export function sanitizePhone(phone) {
  if (!phone) return '';
  // Restrict to digits, +, -, and (). Strip spaces.
  return phone.replace(/[^0-9+\-()]/g, '');
}

/**
 * Sanitizes email addresses for use in mailto: links.
 * Strips characters that could be used for attribute injection.
 * @param {string} email
 * @returns {string}
 */
export function sanitizeEmail(email) {
  if (!email) return '';
  // Strip quotes, brackets, backslashes, percent signs, newlines, angle brackets, spaces, and equals
  return email.replace(/["'[\]\\%\n\r<>\s=]/g, '');
}
