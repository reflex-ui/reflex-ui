import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let KeyboardArrowRightIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
    </Svg>
  </RfxSvgIcon>
);

KeyboardArrowRightIcon = processComponent<RfxSvgPropsOptional>(
  KeyboardArrowRightIcon,
  {
    name: 'KeyboardArrowRightIcon',
  },
);
export { KeyboardArrowRightIcon };
