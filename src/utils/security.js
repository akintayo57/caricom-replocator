/**
 * Sanitizes a phone number for use in a tel: link.
 * Removes all characters except digits and '+'.
 * @param {string} phone
 * @returns {string}
 */
export function sanitizePhone(phone) {
  if (!phone) return '';
  return phone.replace(/[^\d+]/g, '');
}

/**
 * Sanitizes an email address for use in a mailto: link.
 * Strips characters that could be used for attribute injection or XSS.
 * @param {string} email
 * @returns {string}
 */
export function sanitizeEmail(email) {
  if (!email) return '';
  // Basic sanitization: strip quotes, brackets, backslashes, percent signs, and newlines
  // which are often used in injection attacks or XSS.
  return email.replace(/["'<>\\%=\s\n\r[\]]/g, '');
}
