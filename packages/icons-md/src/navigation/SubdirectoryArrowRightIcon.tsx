import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let SubdirectoryArrowRightIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z" />
    </Svg>
  </RfxSvgIcon>
);

SubdirectoryArrowRightIcon = processComponent<RfxSvgPropsOptional>(
  SubdirectoryArrowRightIcon,
  {
    name: 'SubdirectoryArrowRightIcon',
  },
);
export { SubdirectoryArrowRightIcon };
