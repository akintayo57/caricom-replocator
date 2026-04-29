import { test } from 'node:test';
import assert from 'node:assert';
import { sanitizePhone, sanitizeEmail } from './security.js';

test('sanitizePhone should strip non-phone characters', () => {
  assert.strictEqual(sanitizePhone('+1 (473) 440-2255'), '+1(473)440-2255');
  assert.strictEqual(sanitizePhone('+1-473-440-2255" onmouseover="alert(1)'), '+1-473-440-2255(1)');
  assert.strictEqual(sanitizePhone('javascript:alert(1)'), '(1)');
  assert.strictEqual(sanitizePhone(''), '');
  assert.strictEqual(sanitizePhone(null), '');
});

test('sanitizeEmail should strip injection characters', () => {
  assert.strictEqual(sanitizeEmail('test@example.com'), 'test@example.com');
  assert.strictEqual(sanitizeEmail('test@example.com" onclick="alert(1)'), 'test@example.com onclick=alert(1)');
  assert.strictEqual(sanitizeEmail('test@example.com\nSubject: Injection'), 'test@example.comSubject: Injection');
  assert.strictEqual(sanitizeEmail('<script>alert(1)</script>@example.com'), '<script>alert(1)</script>@example.com');
  assert.strictEqual(sanitizeEmail(''), '');
  assert.strictEqual(sanitizeEmail(null), '');
});
