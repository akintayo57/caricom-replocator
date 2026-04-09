import assert from 'node:assert';
import { test, describe } from 'node:test';
import { sanitizePhone, sanitizeEmail } from './security.js';

describe('Security Utilities', () => {
  test('sanitizePhone should remove non-numeric and non-plus characters', () => {
    assert.strictEqual(sanitizePhone('+1 (234) 567-8901'), '+12345678901');
    assert.strictEqual(sanitizePhone('123-456-7890'), '1234567890');
    assert.strictEqual(sanitizePhone('phone: 123'), '123');
    assert.strictEqual(sanitizePhone(null), '');
    assert.strictEqual(sanitizePhone(''), '');
  });

  test('sanitizeEmail should remove dangerous characters for attribute injection', () => {
    assert.strictEqual(sanitizeEmail('test@example.com'), 'test@example.com');
    assert.strictEqual(sanitizeEmail('test@example.com" onmouseover="alert(1)'), 'test@example.comonmouseoveralert(1)');
    assert.strictEqual(sanitizeEmail('test@example.com<script>'), 'test@example.comscript');
    assert.strictEqual(sanitizeEmail('test@example.com\nSubject: Hello'), 'test@example.comSubject:Hello');
    assert.strictEqual(sanitizeEmail('test @ example . com'), 'test@example.com');
    assert.strictEqual(sanitizeEmail(null), '');
  });
});
