/**
 * Sanitizes a phone number for use in tel: links.
 * Removes all characters except digits and '+'.
 */
export function sanitizePhone(phone) {
  if (typeof phone !== 'string') return '';
  return phone.replace(/[^\d+]/g, '');
}

/**
 * Sanitizes an email address for use in mailto: links.
 * Strips characters that could be used for attribute injection or URI manipulation.
 */
export function sanitizeEmail(email) {
  if (typeof email !== 'string') return '';
  // Strips quotes, brackets, backslashes, percent signs, newlines, angle brackets, spaces, and equals signs
  return email.replace(/["'()[\]\\%\n\r<>\s=]/g, '');
}
