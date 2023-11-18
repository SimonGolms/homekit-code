import type { CreateTag } from '../../types';
import { writeFile } from '../../utils/file';
import { composeTag } from './tag.utils';

export const createTag = async ({ name, output, pairingCode, ...rest }: CreateTag) => {
  const svg = composeTag(pairingCode);

  try {
    await writeFile({ name, output, svg, ...rest });
    // eslint-disable-next-line no-console
    console.log(`HomeKit tag successfully generated: ${name}.${output}`);
  } catch (error) {
    console.error(error);
  }
};
