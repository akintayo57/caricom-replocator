import test from 'node:test';
import assert from 'node:assert';
import { sanitizePhone, sanitizeEmail } from './security.js';

test('sanitizePhone removes non-digit characters except +', () => {
  assert.strictEqual(sanitizePhone('(123) 456-7890'), '1234567890');
  assert.strictEqual(sanitizePhone('+1 246-123-4567'), '+12461234567');
  assert.strictEqual(sanitizePhone('phone: 123'), '123');
  assert.strictEqual(sanitizePhone(''), '');
  assert.strictEqual(sanitizePhone(null), '');
});

test('sanitizeEmail removes potentially dangerous characters', () => {
  assert.strictEqual(sanitizeEmail('test@example.com'), 'test@example.com');
  assert.strictEqual(sanitizeEmail('test@example.com" onmouseover="alert(1)'), 'test@example.comonmouseoveralert(1)');
  assert.strictEqual(sanitizeEmail('test@example.com<script>'), 'test@example.comscript');
  assert.strictEqual(sanitizeEmail('test@example.com\n'), 'test@example.com');
  assert.strictEqual(sanitizeEmail('test@example.com '), 'test@example.com');
  assert.strictEqual(sanitizeEmail('test[at]example.com'), 'testatexample.com');
  assert.strictEqual(sanitizeEmail(''), '');
  assert.strictEqual(sanitizeEmail(null), '');
});
