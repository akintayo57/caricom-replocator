import { test } from 'node:test';
import assert from 'node:assert';
import { sanitizePhone, sanitizeEmail } from './security.js';

test('sanitizePhone removes invalid characters', () => {
  assert.strictEqual(sanitizePhone('+1 (473) 440-2255'), '+1(473)440-2255');
  assert.strictEqual(sanitizePhone('440 2255 ext 123'), '4402255123');
  assert.strictEqual(sanitizePhone('tel:123456'), '123456');
  assert.strictEqual(sanitizePhone('<script>'), '');
  assert.strictEqual(sanitizePhone(''), '');
  assert.strictEqual(sanitizePhone(null), '');
});

test('sanitizeEmail removes invalid characters', () => {
  assert.strictEqual(sanitizeEmail('pm@gov.gd'), 'pm@gov.gd');
  assert.strictEqual(sanitizeEmail('pm@gov.gd?subject=test'), 'pm@gov.gd?subject=test');
  assert.strictEqual(sanitizeEmail('pm@gov.gd" onclick="alert(1)'), 'pm@gov.gdonclick=alert(1)');
  assert.strictEqual(sanitizeEmail('test<script>@example.com'), 'testscript@example.com');
  assert.strictEqual(sanitizeEmail(''), '');
  assert.strictEqual(sanitizeEmail(null), '');
});
