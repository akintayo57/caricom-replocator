/**
 * Sanitizes a phone number by removing all characters except digits, +, -, (, ), and space.
 * @param {string} phone
 * @returns {string}
 */
export function sanitizePhone(phone) {
  if (!phone) return '';
  return phone.replace(/[^0-9+\-() ]/g, '');
}

/**
 * Basic email sanitization - removes whitespace and ensures it doesn't contain common injection chars.
 * Note: This is not a validator, just a basic sanitizer for href usage.
 * @param {string} email
 * @returns {string}
 */
export function sanitizeEmail(email) {
  if (!email) return '';
  // Remove whitespace and any characters that could be used for header injection in mailto
  return email.trim().replace(/[\r\n]/g, '');
}
