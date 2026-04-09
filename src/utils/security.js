/**
 * Sanitizes a phone number for use in tel: links.
 * Removes all characters except digits and '+'.
 * @param {string} phone
 * @returns {string}
 */
export function sanitizePhone(phone) {
  if (!phone) return '';
  return phone.replace(/[^\d+]/g, '');
}

/**
 * Sanitizes an email address for use in mailto: links.
 * Strips quotes, brackets, backslashes, percent signs, newlines, angle brackets, spaces, and equals signs.
 * @param {string} email
 * @returns {string}
 */
export function sanitizeEmail(email) {
  if (!email) return '';
  // Strips characters that could be used for attribute injection or header injection
  return email.replace(/["'[\]\\%\n\r<> =]/g, '');
}
