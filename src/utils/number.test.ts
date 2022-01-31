import { isNumber, isPairingCode } from './number';

describe('isNumber', () => {
  test('its a number', () => {
    expect.assertions(6);
    ['0', '1', '2', '-1', '1.345e17', '1'].forEach((number) => {
      expect(isNumber(number)).toBe(true);
    });
  });

  test('its not a number', () => {
    expect.assertions(6);
    ['false', 'true', 'NaN', '[]', '{}', '1a'].forEach((number) => {
      expect(isNumber(number)).toBe(false);
    });
  });
});

describe('isPairingCode', () => {
  test('its a pairingCode', () => {
    expect.assertions(2);
    ['00000000', '84131633'].forEach((number) => {
      expect(isPairingCode(number)).toBe(true);
    });
  });

  test('its not a pairingCode', () => {
    expect.assertions(15);
    ['false', 'true', 'NaN', '[]', '{}', '1a', '1', '12', '123', '1234', '12345', '123456', '1234567', '123456789', '123-45-678'].forEach(
      (number) => {
        expect(isPairingCode(number)).toBe(false);
      },
    );
  });
});
