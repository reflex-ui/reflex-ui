import React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'react-native-svg';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let PlayForWorkIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5h-2zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6z" />
    </Svg>
  </RfxSvgIcon>
);

PlayForWorkIcon = processComponent<RfxSvgPropsOptional>(PlayForWorkIcon, {
  name: 'PlayForWorkIcon',
});
export { PlayForWorkIcon };
