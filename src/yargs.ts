import yargs from 'yargs/yargs';
import { CATEGORIES } from './config/categories';
import { OUTPUT_FORMATS } from './config/output';
import { Category, OutputFormat } from './types';
import { isPairingCode } from './utils/number';

export const argv = yargs(process.argv.slice(2))
  // Attempt to detect the os locale
  .detectLocale(false)
  // Format usage output
  .wrap(null)
  .command('qrcode', 'Generate a scannable HomeKit QR Code label', (yargsCmd) => {
    return yargsCmd
      .options({
        category: {
          alias: 'c',
          choices: Object.keys(CATEGORIES),
          default: Object.keys(CATEGORIES)[0] as Category,
          describe: 'Category of the HomeKit accessory, required for generating a QR Code',
        },
        flag: {
          alias: 'f',
          default: 2,
          describe:
            'Flag how to connect to the HomeKit accessory. (1 = NFC; 2 = IP; 4 = BLE; 8 = Wireless Accessory Configuration (WAC)/Apples MFi)',
          type: 'number',
        },
        name: {
          alias: 'n',
          default: 'homekit-qrcode',
          describe: 'Name of the generated file',
          type: 'string',
        },
        output: {
          alias: 'o',
          choices: OUTPUT_FORMATS,
          default: OUTPUT_FORMATS[0] as OutputFormat,
          demandOption: true,
          describe: 'Format of the generated file',
        },
        pairingCode: {
          alias: 'p',
          demandOption: true,
          describe: '8 digits pairing code',
          type: 'string',
        },
        setupId: {
          alias: 's',
          default: '',
          describe: 'Setup Id, required for generating a QR Code',
          type: 'string',
        },
        zoom: {
          alias: 'z',
          default: 2,
          describe: 'Zoom factor when the output is an image',
          type: 'number',
        },
      })
      .example('npx homekit-code qrcode --category=switch --pairingCode=84131633 --setupId=3QYT', 'Generate a QR code for a HomeKit switch')
      .example(
        'npx homekit-code qrcode --category=switch --pairingCode=84131633 --setupId=3QYT --name=switch --output=png --zoom=10',
        'Generate a QR code for a HomeKit switch as switch.png with an image zoom factor of 10',
      )
      .example('npx homekit-code qrcode -c switch -f 10 -p 84131633 -s 3QYT', 'Generate a QR code for a IP (2) + WAC (8) HomeKit switch');
  })
  .command('tag', 'Generate a scannable HomeKit tag label', (yargsCmd) => {
    return yargsCmd
      .options({
        name: {
          alias: 'n',
          default: 'homekit-tag',
          describe: 'Name of the generated file',
          type: 'string',
        },
        output: {
          alias: 'o',
          choices: OUTPUT_FORMATS,
          default: OUTPUT_FORMATS[0] as OutputFormat,
          demandOption: true,
          describe: 'Format of the generated file',
        },
        pairingCode: {
          alias: 'p',
          demandOption: true,
          describe: '8 digits pairing code',
          type: 'string',
        },
        zoom: {
          alias: 'z',
          default: 5,
          describe: 'Zoom factor when the output is an image',
          type: 'number',
        },
      })
      .example('npx homekit-code tag --pairingCode=84131633', 'Generate a scannable tag for a HomeKit accessory')
      .example(
        'npx homekit-code tag --pairingCode=84131633 --name=switch --output=png --zoom=10',
        'Generate a scannable tag for a HomeKit accessory as switch.png with an image zoom factor of 10',
      );
  })
  .check(({ pairingCode }) => {
    if (isPairingCode(pairingCode)) {
      return true;
    }
    throw new Error('Pairing Code must be specified with 8 digits');
  })
  .help()
  .usage('Usage: homekit-code [commands] [options]')
  .parseSync();
