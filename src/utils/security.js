/**
 * Sanitizes a phone number for use in a tel: link.
 * Removes characters that could be used for attribute injection or other unintended behavior.
 * Permits digits, +, -, and parentheses.
 * @param {string} phone
 * @returns {string}
 */
export function sanitizePhone(phone) {
  if (!phone) return '';
  return phone.replace(/[^0-9+\-()]/g, '');
}

/**
 * Sanitizes an email address for use in a mailto: link.
 * Removes common injection characters like quotes, brackets, and newlines.
 * @param {string} email
 * @returns {string}
 */
export function sanitizeEmail(email) {
  if (!email) return '';
  // Strips characters that could be used to break out of attributes or headers
  // like quotes, angle brackets, backslashes, and % (to prevent URL encoding tricks)
  return email.replace(/["'<>\\%]/g, '').replace(/[\r\n]/g, '');
}
