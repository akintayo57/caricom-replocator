/**
 * Sanitizes a phone number for use in a tel: link.
 * Removes all characters except digits, +, -, and ().
 *
 * @param {string} phone - The phone number to sanitize
 * @returns {string} The sanitized phone number
 */
export function sanitizePhone(phone) {
  if (!phone) return '';
  // Only allow digits, +, -, and parentheses for tel: links
  return phone.replace(/[^0-9+\-()]/g, '');
}

/**
 * Sanitizes an email address for use in a mailto: link.
 * Removes characters that could be used for attribute injection.
 *
 * @param {string} email - The email to sanitize
 * @returns {string} The sanitized email
 */
export function sanitizeEmail(email) {
  if (!email) return '';
  // Strip characters that could be used for injection or are invalid in mailto:
  // (quotes, brackets, backslashes, percent signs, newlines)
  return email.replace(/["'<>\\% \r\n]/g, '');
}
