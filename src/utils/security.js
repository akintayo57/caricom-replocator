/**
 * Sanitizes a phone number for use in a tel: link.
 * Restricts to digits, +, -, and parentheses to mitigate XSS and attribute injection.
 * @param {string} phone
 * @returns {string}
 */
export const sanitizePhone = (phone) => {
  if (!phone) return '';
  return phone.replace(/[^\d+\-()]/g, '');
};

/**
 * Sanitizes an email address for use in a mailto: link.
 * Strips quotes, brackets, backslashes, and percent signs but allows apostrophes.
 * @param {string} email
 * @returns {string}
 */
export const sanitizeEmail = (email) => {
  if (!email) return '';
  return email.replace(/[[\]"\\%]/g, '');
};
