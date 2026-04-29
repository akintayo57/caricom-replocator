import { test } from 'node:test';
import assert from 'node:assert';
import { sanitizePhone, sanitizeEmail } from './security.js';

test('sanitizePhone should remove non-numeric and non-plus characters', () => {
  assert.strictEqual(sanitizePhone('+1-473-440-2255'), '+14734402255');
  assert.strictEqual(sanitizePhone('440 2255'), '4402255');
  assert.strictEqual(sanitizePhone('(473) 440-2255'), '4734402255');
  assert.strictEqual(sanitizePhone('javascript:alert(1)'), '1');
  assert.strictEqual(sanitizePhone(null), '');
});

test('sanitizeEmail should strip common injection characters', () => {
  assert.strictEqual(sanitizeEmail('pm@gov.gd'), 'pm@gov.gd');
  assert.strictEqual(sanitizeEmail('pm@gov.gd" onmouseover="alert(1)'), 'pm@gov.gdonmouseoveralert(1)');
  assert.strictEqual(sanitizeEmail('test@example.com\r\nBcc: victim@example.com'), 'test@example.comBcc:victim@example.com');
  assert.strictEqual(sanitizeEmail('email@example.com<script>'), 'email@example.comscript');
  assert.strictEqual(sanitizeEmail(' '), '');
  assert.strictEqual(sanitizeEmail(null), '');
});
