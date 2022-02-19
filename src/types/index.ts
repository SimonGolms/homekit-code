import { CATEGORIES } from '../config/categories';
import { FLAGS } from '../config/flags';
import { OUTPUT_FORMATS } from '../config/output';

export type Category = keyof typeof CATEGORIES;

export type Flag = keyof typeof FLAGS;

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
  flag: Flag;
  pairingCode: string;
  setupId: string;
};

export type ComposeSetupUri = {
  categoryId: number;
  flag?: number; // 2 = IP; 4 = BLE; 8 = Wireless Accessory Configuration (WAC) / Apple's MFi
  password: string;
  reserved?: number;
  setupId: string;
  version?: number;
};

export type ComposeQrCode = {
  pairingCode: string;
  setupUri: string;
};
