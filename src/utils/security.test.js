import { describe, it, expect } from 'vitest';
import { sanitizePhone, sanitizeEmail } from './security';

describe('security utils', () => {
  describe('sanitizePhone', () => {
    it('should allow valid phone numbers', () => {
      expect(sanitizePhone('+1-473-440-2255')).toBe('+1-473-440-2255');
      expect(sanitizePhone('(473) 440-2255')).toBe('(473)440-2255');
    });

    it('should strip potentially malicious characters', () => {
      expect(sanitizePhone('+1-473" onmouseover="alert(1)')).toBe('+1-473(1)');
      expect(sanitizePhone('123abc456')).toBe('123456');
    });

    it('should return empty string for null/undefined', () => {
      expect(sanitizePhone(null)).toBe('');
      expect(sanitizePhone(undefined)).toBe('');
    });
  });

  describe('sanitizeEmail', () => {
    it('should allow valid email addresses', () => {
      expect(sanitizeEmail('pm@gov.gd')).toBe('pm@gov.gd');
      expect(sanitizeEmail("o'malley@example.com")).toBe("o'malley@example.com");
    });

    it('should strip characters that could cause attribute breakout', () => {
      expect(sanitizeEmail('test@example.com" onmouseover="alert(1)')).toBe('test@example.com onmouseover=alert(1)');
      expect(sanitizeEmail('test<script>@example.com')).toBe('testscript@example.com');
    });

    it('should strip characters that could be used for URI manipulation', () => {
      expect(sanitizeEmail('test%0D%0A@example.com')).toBe('test0D0A@example.com');
      expect(sanitizeEmail('test\r\n@example.com')).toBe('test@example.com');
    });

    it('should return empty string for null/undefined', () => {
      expect(sanitizeEmail(null)).toBe('');
      expect(sanitizeEmail(undefined)).toBe('');
    });
  });
});
