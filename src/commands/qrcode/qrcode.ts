import { CATEGORIES } from '../../config/categories';
import { CreateQrCode } from '../../types';
import { writeFile } from '../../utils/file';
import { composeQrCode, composeSetupUri } from './qrcode.utils';

export const createQrCode = async ({ category, flag, name, output, pairingCode, setupId, ...rest }: CreateQrCode) => {
  const setupUri = composeSetupUri({
    categoryId: CATEGORIES[category],
    flag,
    password: pairingCode,
    setupId,
  });

  const svg = await composeQrCode({ pairingCode, setupUri });

  try {
    await writeFile({ name, output, svg, ...rest });
    console.log(`HomeKit QR Code successfully generated: ${name}.${output}`);
  } catch (error) {
    console.error(error);
  }
};
