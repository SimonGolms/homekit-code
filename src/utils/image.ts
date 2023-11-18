import { Resvg } from '@resvg/resvg-js';
import type { CreateImage } from '../types';

export const createImage = ({ svg, zoom = 5 }: CreateImage) => {
  const resvg = new Resvg(svg, {
    fitTo: {
      mode: 'zoom',
      value: zoom,
    },
  });

  return resvg.render().asPng();
};
