import { Resvg } from '@resvg/resvg-js';
import { CreateImage } from '../types';

export const createImage = async ({ svg, zoom = 5 }: CreateImage): Promise<Buffer> => {
  const resvg = new Resvg(svg, {
    fitTo: {
      mode: 'zoom',
      value: zoom,
    },
  });

  return resvg.render().asPng();
};
