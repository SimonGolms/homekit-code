import fs from 'fs';
import type { CreateFileBuffer, WriteFile } from '../types';
import { createImage } from './image';

const createFileBuffer = async ({ output, svg, zoom }: CreateFileBuffer): Promise<Buffer> => {
  if (output === 'png') {
    return createImage({ svg, zoom });
  }

  return Promise.resolve(Buffer.from(svg, 'binary'));
};

export const writeFile = async ({ name, output, ...rest }: WriteFile): Promise<void> => {
  const fileBuffer = await createFileBuffer({ output, ...rest });

  fs.writeFile(`${name}.${output}`, fileBuffer, 'utf8', (error) => {
    if (error) {
      throw error;
    }
  });
};
