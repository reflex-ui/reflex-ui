import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  processComponent,
  RfxSvgPropsOptional,
  SvgIcon,
} from '@reflex-ui/core';

let KeyboardArrowUpIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
    </Svg>
  </SvgIcon>
);

KeyboardArrowUpIcon = processComponent<RfxSvgPropsOptional>(
  KeyboardArrowUpIcon,
  {
    name: 'KeyboardArrowUpIcon',
  },
);
export { KeyboardArrowUpIcon };
