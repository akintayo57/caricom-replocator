/**
 * Sanitizes a phone number for use in tel: links.
 * Restricts to digits, +, -, and parentheses.
 */
export function sanitizePhone(phone) {
  if (!phone) return '';
  return phone.replace(/[^\d+()-]/g, '');
}

/**
 * Sanitizes an email address for use in mailto: links.
 * Strips quotes, brackets, backslashes, percent signs, and newlines.
 */
export function sanitizeEmail(email) {
  if (!email) return '';
  // Strips quotes, brackets, backslashes, percent signs, and whitespace
  return email.replace(/["'<>\\%[\]()]/g, '').replace(/\s/g, '');
}
