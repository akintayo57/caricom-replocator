/**
 * Sanitizes a phone number for use in a tel: link.
 * Restricts to digits, plus (+), minus (-), and parentheses.
 */
export function sanitizePhone(phone) {
  if (!phone) return '';
  // Only allow characters used in common phone number formats
  return phone.replace(/[^0-9+\-()]/g, '');
}

/**
 * Sanitizes an email for use in a mailto: link.
 * Strips quotes, brackets, backslashes, and percent signs that could be used for attribute injection.
 */
export function sanitizeEmail(email) {
  if (!email) return '';
  // While emails can contain many characters according to RFCs,
  // we restrict common injection characters for links.
  // We allow apostrophes but strip quotes, brackets, backslashes, etc.
  return email.replace(/["'[\]\\%<>]/g, '');
}
