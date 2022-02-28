import { CATEGORIES } from '../config/categories';
import { OUTPUT_FORMATS } from '../config/output';

export type Category = keyof typeof CATEGORIES;

export type OutputFormat = typeof OUTPUT_FORMATS[number];

export type CreateFileBuffer = CreateImage & {
  output: OutputFormat;
};

export type CreateImage = {
  svg: string;
  zoom: number;
};

export type WriteFile = CreateFileBuffer & {
  name: string;
};

export type CreateTag = Omit<WriteFile, 'svg'> & {
  pairingCode: string;
};

export type CreateQrCode = Omit<WriteFile, 'svg'> & {
  category: Category;
  flag: number;
  pairingCode: string;
  setupId: string;
};

export type ComposeSetupUri = {
  categoryId: number;
  flag: number;
  password: string;
  reserved?: number;
  setupId: string;
  version?: number;
};

export type ComposeQrCode = {
  pairingCode: string;
  setupUri: string;
};
