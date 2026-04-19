/**
 * Sanitizes a phone number for use in tel: links.
 * Only allows digits, plus sign, and hyphens.
 */
export function sanitizePhone(phone) {
  if (!phone) return '';
  // Remove any characters that aren't digits, +, or -
  return phone.replace(/[^\d+-]/g, '');
}

/**
 * Sanitizes an email address for use in mailto: links.
 * Returns empty string if invalid format to prevent URI-based injection.
 */
export function sanitizeEmail(email) {
  if (!email) return '';
  // Basic email validation regex to ensure it looks like a standard address
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email) ? email : '';
}
