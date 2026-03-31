/**
 * Sanitizes a phone number string for use in tel: links.
 * Restricts characters to digits, +, -, and parentheses.
 * @param {string} phone - The phone number to sanitize
 * @returns {string} The sanitized phone number
 */
export const sanitizePhone = (phone) => {
  if (!phone) return '';
  return phone.replace(/[^\d+\-()]/g, '');
};

/**
 * Sanitizes an email address for use in mailto: links.
 * Strips characters commonly used for XSS or attribute injection.
 * @param {string} email - The email address to sanitize
 * @returns {string} The sanitized email address
 */
export const sanitizeEmail = (email) => {
  if (!email) return '';
  // Strip quotes, brackets, backslashes, percent signs, and newlines
  return email.replace(/["'[\]\\%\n\r]/g, '');
};
