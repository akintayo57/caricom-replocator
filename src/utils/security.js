/**
 * Sanitizes a phone number for use in a tel: link.
 * It keeps only digits, +, -, and parentheses to prevent XSS and attribute injection.
 */
export function sanitizePhone(phone) {
  if (!phone) return '';
  return phone.replace(/[^\d+()-\s]/g, '');
}

/**
 * Sanitizes an email address for use in a mailto: link.
 * It strips quotes, brackets, backslashes, percent signs, newlines, and angle brackets.
 */
export function sanitizeEmail(email) {
  if (!email) return '';
  // Basic sanitization: allow most common email characters, strip potentially harmful ones
  return email.replace(/["'\\%[\r\n\]<>]/g, '');
}
