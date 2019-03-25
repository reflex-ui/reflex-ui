import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let SubdirectoryArrowLeftIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z" />
    </Svg>
  </RfxSvgIcon>
);

SubdirectoryArrowLeftIcon = processComponent<RfxSvgPropsOptional>(
  SubdirectoryArrowLeftIcon,
  {
    name: 'SubdirectoryArrowLeftIcon',
  },
);
export { SubdirectoryArrowLeftIcon };
