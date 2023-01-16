#!/usr/bin/env node
/* eslint-disable import/no-unused-modules, jest/require-hook */

import { createQrCode } from './commands/qrcode/qrcode';
import { createTag } from './commands/tag/tag';
import { isValidCategory } from './utils/isValidCategory';
import { argv } from './yargs';

const main = async () => {
  const { _: commands, name, output, pairingCode, zoom } = argv;

  if (commands[0] === 'qrcode') {
    const { category, flag, setupId = '' } = argv;
    // Type-Guard since yargs does not support custom types that well
    if (isValidCategory(category)) {
      await createQrCode({ category, flag, name, output, pairingCode, setupId, zoom });
    }
  }
  if (commands[0] === 'tag') {
    await createTag({ name, output, pairingCode, zoom });
  }
};

void main();
