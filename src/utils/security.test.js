import { test } from 'node:test';
import assert from 'node:assert';
import { sanitizePhone, sanitizeEmail } from './security.js';

test('sanitizePhone should remove non-digit characters except +', () => {
  assert.strictEqual(sanitizePhone('+1 (234) 567-8901'), '+12345678901');
  assert.strictEqual(sanitizePhone('123-456-7890'), '1234567890');
  assert.strictEqual(sanitizePhone('phone: 123'), '123');
  assert.strictEqual(sanitizePhone(null), '');
});

test('sanitizeEmail should remove dangerous characters', () => {
  assert.strictEqual(sanitizeEmail('test@example.com'), 'test@example.com');
  assert.strictEqual(sanitizeEmail('test"injection"@example.com'), 'testinjection@example.com');
  assert.strictEqual(sanitizeEmail("test'injection'@example.com"), 'testinjection@example.com');
  assert.strictEqual(sanitizeEmail('test\ninjection@example.com'), 'testinjection@example.com');
  assert.strictEqual(sanitizeEmail('test<script>@example.com'), 'testscript@example.com');
  assert.strictEqual(sanitizeEmail(null), '');
});
