/**
 * Sanitizes a phone number for use in a tel: link.
 * Restricts to digits, +, -, and parentheses.
 *
 * @param {string} phone
 * @returns {string}
 */
export function sanitizePhone(phone) {
  if (!phone) return '';
  return phone.replace(/[^0-9+\-()]/g, '');
}

/**
 * Sanitizes an email address for use in a mailto: link.
 * Strips quotes, brackets, backslashes, percent signs, and control characters
 * to mitigate attribute injection and URI manipulation.
 *
 * @param {string} email
 * @returns {string}
 */
export function sanitizeEmail(email) {
  if (!email) return '';
  // Strips characters that could be used for injection in mailto: links
  // while allowing apostrophes which are valid in local parts of emails.
  // Also strips control characters like \r and \n.
  return email.replace(/["<>[\]\\%\r\n]/g, '');
}
