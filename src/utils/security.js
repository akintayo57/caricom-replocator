/**
 * Sanitizes a phone number for use in a tel: link.
 * Allows only digits, +, -, and parentheses.
 */
export function sanitizePhone(phone) {
  if (!phone) return '';
  return phone.replace(/[^0-9+\-()]/g, '');
}

/**
 * Sanitizes an email address for use in a mailto: link.
 * Removes common injection characters while maintaining valid RFC 5322 characters.
 */
export function sanitizeEmail(email) {
  if (!email) return '';
  // Strip common injection characters: quotes, brackets, backslashes, percent signs
  return email.replace(/["'<>[\]\\%]/g, '');
}
