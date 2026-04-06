import { test } from 'node:test';
import assert from 'node:assert';
import { sanitizePhone, sanitizeEmail } from './security.js';

test('sanitizePhone - permits valid characters', () => {
  assert.strictEqual(sanitizePhone('+1-473-440-2255'), '+1-473-440-2255');
  assert.strictEqual(sanitizePhone('(473) 440-2255'), '(473)440-2255'); // Space removed
});

test('sanitizePhone - strips malicious characters', () => {
  assert.strictEqual(sanitizePhone('+1-473" onClick="alert(1)'), '+1-473(1)');
  assert.strictEqual(sanitizePhone('+1-473<script>'), '+1-473');
});

test('sanitizeEmail - permits valid characters', () => {
  assert.strictEqual(sanitizeEmail('pm@gov.gd'), 'pm@gov.gd');
  assert.strictEqual(sanitizeEmail('first.last@domain.com'), 'first.last@domain.com');
});

test('sanitizeEmail - strips injection characters', () => {
  assert.strictEqual(sanitizeEmail('pm@gov.gd" onmouseover="alert(1)'), 'pm@gov.gdonmouseoveralert(1)');
  assert.strictEqual(sanitizeEmail('pm@gov.gd\nSubject: Urgent'), 'pm@gov.gdSubject:Urgent');
  assert.strictEqual(sanitizeEmail('test@example.com<script>'), 'test@example.comscript');
});
