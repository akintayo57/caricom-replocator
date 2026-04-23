import { test } from 'node:test';
import assert from 'node:assert';
import { sanitizePhone, sanitizeEmail } from './security.js';

test('sanitizePhone removes harmful characters', () => {
  assert.strictEqual(sanitizePhone('123-456-7890'), '123-456-7890');
  assert.strictEqual(sanitizePhone('+1 (473) 440-2255'), '+1 (473) 440-2255');
  // '123" onclick="alert(1)'
  // " (2) -> removed
  // space (2) -> kept
  // o (2) -> removed
  // n (1) -> removed
  // c (2) -> removed
  // l (2) -> removed
  // i (1) -> removed
  // k (1) -> removed
  // = (1) -> removed
  // a (1) -> removed
  // r (1) -> removed
  // e (1) -> removed
  // t (1) -> removed
  // ( (1) -> kept
  // 1 (1) -> kept
  // ) (1) -> kept
  // Result should be '123  (1)' - wait, why did it say '123 (1)'?
  // 123" onclick="alert(1)
  // There is only ONE space between " and onclick
  // Let's count again:
  // 1 2 3 " _ o n c l i c k = " a l e r t ( 1 )
  // 123 is 3 chars. " is removed. Space is kept. onclick is removed. = is removed. " is removed. alert is removed. (1) is kept.
  // So '123 (1)'
  assert.strictEqual(sanitizePhone('123" onclick="alert(1)'), '123 (1)');
});

test('sanitizeEmail removes harmful characters', () => {
  assert.strictEqual(sanitizeEmail('test@example.com'), 'test@example.com');
  assert.strictEqual(sanitizeEmail('test@example.com" onclick="alert(1)'), 'test@example.com onclick=alert(1)');
  assert.strictEqual(sanitizeEmail('test@example.com\n'), 'test@example.com');
});
