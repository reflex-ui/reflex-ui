import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let KeyboardArrowLeftIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" />
    </Svg>
  </RfxSvgIcon>
);

KeyboardArrowLeftIcon = processComponent<RfxSvgPropsOptional>(
  KeyboardArrowLeftIcon,
  {
    name: 'KeyboardArrowLeftIcon',
  },
);
export { KeyboardArrowLeftIcon };
