/**
 * Sanitizes a phone number for use in tel: links.
 * Restricts to digits, +, -, and parentheses.
 */
export function sanitizePhone(phone) {
  if (!phone) return '';
  return phone.replace(/[^\d+\-()]/g, '');
}

/**
 * Sanitizes an email address for use in mailto: links.
 * Strips quotes, brackets, backslashes, and percent signs.
 * Allows apostrophes for RFC compliance.
 */
export function sanitizeEmail(email) {
  if (!email) return '';
  return email.replace(/["[\]\\%]/g, '');
}
