export const isNumber = (value: string) => {
  return !isNaN(Number(value));
};

export const isPairingCode = (pairingCode: string) => {
  return pairingCode.length === 8 && pairingCode.split('').every((char) => isNumber(char));
};
