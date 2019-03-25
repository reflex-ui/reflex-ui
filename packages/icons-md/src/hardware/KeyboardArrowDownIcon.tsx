import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let KeyboardArrowDownIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
    </Svg>
  </RfxSvgIcon>
);

KeyboardArrowDownIcon = processComponent<RfxSvgPropsOptional>(
  KeyboardArrowDownIcon,
  {
    name: 'KeyboardArrowDownIcon',
  },
);
export { KeyboardArrowDownIcon };
