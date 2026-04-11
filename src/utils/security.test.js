import { describe, it } from 'node:test';
import assert from 'node:assert';
import { sanitizePhone, sanitizeEmail } from './security.js';

describe('Security Utilities', () => {
  describe('sanitizePhone', () => {
    it('should strip non-numeric characters except +', () => {
      assert.strictEqual(sanitizePhone('+1 (473) 123-4567'), '+14731234567');
      assert.strictEqual(sanitizePhone('123abc456'), '123456');
    });

    it('should handle non-string input', () => {
      assert.strictEqual(sanitizePhone(null), '');
      assert.strictEqual(sanitizePhone(undefined), '');
      assert.strictEqual(sanitizePhone(123), '');
    });
  });

  describe('sanitizeEmail', () => {
    it('should strip potentially dangerous characters', () => {
      // Basic sanitization
      assert.strictEqual(sanitizeEmail('test@example.com'), 'test@example.com');

      // Strip spaces and newlines
      assert.strictEqual(sanitizeEmail('test @example.com\n'), 'test@example.com');

      // Strip attribute injection attempts
      const malicious = 'test@example.com" onmouseover="alert(1)';
      assert.strictEqual(sanitizeEmail(malicious), 'test@example.comonmouseoveralert1');

      // Strip URI manipulation characters
      assert.strictEqual(sanitizeEmail('test%40example.com'), 'test40example.com');
      assert.strictEqual(sanitizeEmail('test[at]example.com'), 'testatexample.com');
    });

    it('should handle non-string input', () => {
      assert.strictEqual(sanitizeEmail(null), '');
      assert.strictEqual(sanitizeEmail(undefined), '');
    });
  });
});
