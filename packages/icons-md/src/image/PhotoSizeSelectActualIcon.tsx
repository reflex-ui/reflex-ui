import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let PhotoSizeSelectActualIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M21 3H3C2 3 1 4 1 5v14c0 1.1.9 2 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2zM5 17l3.5-4.5 2.5 3.01L14.5 11l4.5 6H5z" />
    </Svg>
  </RfxSvgIcon>
);

PhotoSizeSelectActualIcon = processComponent<RfxSvgPropsOptional>(
  PhotoSizeSelectActualIcon,
  {
    name: 'PhotoSizeSelectActualIcon',
  },
);
export { PhotoSizeSelectActualIcon };
