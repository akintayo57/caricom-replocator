/**
 * Sanitizes a phone number by removing any characters that are not digits,
 * plus signs (+), hyphens (-), or parentheses.
 * This helps prevent attribute injection in tel: links.
 *
 * @param {string} phone - The phone number to sanitize.
 * @returns {string} The sanitized phone number.
 */
export function sanitizePhone(phone) {
  if (!phone) return '';
  return phone.replace(/[^\d+()-\s]/g, '');
}

/**
 * Sanitizes an email address by removing potentially dangerous characters
 * like quotes, brackets, and backslashes that could be used for injection.
 *
 * @param {string} email - The email address to sanitize.
 * @returns {string} The sanitized email address.
 */
export function sanitizeEmail(email) {
  if (!email) return '';
  // Basic sanitization to prevent common email-based injection techniques
  // while allowing most valid email characters.
  // We allow apostrophes (') as they are RFC-compliant in email addresses.
  return email.replace(/["<>\\;%]/g, '');
}
