/**
 * Sanitizes a phone number for use in a tel: link.
 * Restricts to digits, +, -, and parentheses.
 */
export function sanitizePhone(phone) {
  if (!phone) return '';
  // Only allow digits, +, -, and ()
  // Also strip any other character, including letters that could form event handlers
  return phone.replace(/[^0-9+\-()]/g, '');
}

/**
 * Sanitizes an email address for use in a mailto: link.
 * Strips characters that could be used for attribute injection.
 */
export function sanitizeEmail(email) {
  if (!email) return '';
  // Strip quotes, brackets, backslashes, percent signs, and newlines
  // Using a more robust exclusion set
  return email.replace(/["'[\]\\%\r\n<>]/g, '');
}
