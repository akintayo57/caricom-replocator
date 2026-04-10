/**
 * Sanitizes a phone number for use in tel: links.
 * Removes all characters except digits and '+'.
 */
export function sanitizePhone(phone) {
  if (!phone) return '';
  return phone.replace(/[^\d+]/g, '');
}

/**
 * Sanitizes an email address for use in mailto: links.
 * Strips potentially dangerous characters to prevent attribute injection.
 */
export function sanitizeEmail(email) {
  if (!email) return '';
  // Strips quotes, brackets, backslashes, percent signs, newlines, angle brackets, spaces, and equals signs
  return email.replace(/["'()\\% \n\r<>=]/g, '');
}
