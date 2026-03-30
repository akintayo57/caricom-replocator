/**
 * Sanitizes a phone number for use in tel: links.
 * Restricts input to digits, +, -, and parentheses.
 * @param {string} phone
 * @returns {string}
 */
export const sanitizePhone = (phone) => {
  if (!phone) return '';
  return phone.replace(/[^\d+\-()]/g, '');
};

/**
 * Sanitizes an email address for use in mailto: links.
 * Strips quotes, brackets, backslashes, percent signs, and newlines.
 * @param {string} email
 * @returns {string}
 */
export const sanitizeEmail = (email) => {
  if (!email) return '';
  // Strip characters that could be used for attribute injection or XSS in mailto:
  return email.replace(/["'<>\\%[\r\n\]]/g, '');
};
