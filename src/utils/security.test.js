import { test } from 'node:test';
import assert from 'node:assert';
import { sanitizePhone, sanitizeEmail } from './security.js';

test('sanitizePhone removes restricted characters', () => {
  assert.strictEqual(sanitizePhone('+1-473-440-2255'), '+1-473-440-2255');
  assert.strictEqual(sanitizePhone('+1 (473) 440 2255'), '+1(473)4402255');
  assert.strictEqual(sanitizePhone('+1-473" onClick="alert(1)'), '+1-473(1)');
  assert.strictEqual(sanitizePhone('javascript:alert(1)'), '(1)');
});

test('sanitizeEmail removes restricted characters', () => {
  assert.strictEqual(sanitizeEmail('pm@gov.gd'), 'pm@gov.gd');
  assert.strictEqual(sanitizeEmail('pm@gov.gd"> <script>alert(1)</script>'), 'pm@gov.gd scriptalert(1)/script');
  assert.strictEqual(sanitizeEmail('pm@gov.gd\r\nSubject: Important'), 'pm@gov.gdSubject: Important');
  assert.strictEqual(sanitizeEmail('test%40example.com'), 'test40example.com');
});
