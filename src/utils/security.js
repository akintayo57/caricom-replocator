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
 * Strips common injection/XSS characters.
 */
export function sanitizeEmail(email) {
  if (!email) return '';
  // Strip quotes, brackets, backslashes, percent signs, newlines, angle brackets, spaces, and equals signs.
  return email.replace(/["'[\]\\%\r\n<> =]/g, '');
}
