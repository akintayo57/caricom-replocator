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
 * Strips characters that could be used for attribute injection.
 */
export function sanitizeEmail(email) {
  if (!email) return '';
  // Remove common injection characters
  return email.replace(/["'\\% \n\r\t<>=[\]]/g, '');
}
