import { render } from '@resvg/resvg-js';
import { CreateImage } from '../types';

export const createImage = async ({ svg, zoom = 5 }: CreateImage): Promise<Buffer> => {
  return render(svg, {
    fitTo: {
      mode: 'zoom',
      value: zoom,
    },
  });
};
