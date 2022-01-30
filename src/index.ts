#!/usr/bin/env node
/* eslint-disable import/no-unused-modules, jest/require-hook */

import { createQrCode } from './commands/qrcode/qrcode';
import { createTag } from './commands/tag/tag';
import { argv } from './yargs';

const main = async () => {
  const { _: commands, name, output, pairingCode, zoom } = argv;

  if (commands[0] === 'qrcode') {
    const { category, setupId = '' } = argv;
    await createQrCode({ category, name, output, pairingCode, setupId, zoom });
  }
  if (commands[0] === 'tag') {
    await createTag({ name, output, pairingCode, zoom });
  }
};

main();
