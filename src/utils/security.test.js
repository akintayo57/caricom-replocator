import { test } from 'node:test';
import assert from 'node:assert/strict';
import { sanitizePhone, sanitizeEmail } from './security.js';

test('sanitizePhone removes non-numeric characters except +, -, and ()', () => {
  assert.strictEqual(sanitizePhone('+1 (473) 440-2255'), '+1(473)440-2255');
  assert.strictEqual(sanitizePhone('473 440 2255 <script>'), '4734402255');
  assert.strictEqual(sanitizePhone(''), '');
  assert.strictEqual(sanitizePhone(null), '');
});

test('sanitizeEmail removes dangerous characters and whitespace', () => {
  assert.strictEqual(sanitizeEmail('pm@gov.gd'), 'pm@gov.gd');
  assert.strictEqual(sanitizeEmail('pm@gov.gd" onmouseover="alert(1)'), 'pm@gov.gdonmouseover=alert1');
  assert.strictEqual(sanitizeEmail('test email@domain.com'), 'testemail@domain.com');
  assert.strictEqual(sanitizeEmail('<script>bad@email.com</script>'), 'scriptbad@email.com/script');
  assert.strictEqual(sanitizeEmail(''), '');
  assert.strictEqual(sanitizeEmail(null), '');
});
