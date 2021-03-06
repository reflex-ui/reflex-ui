import React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'react-native-svg';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let SpaceBarIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M18 9v4H6V9H4v6h16V9z" />
    </Svg>
  </RfxSvgIcon>
);

SpaceBarIcon = processComponent<RfxSvgPropsOptional>(SpaceBarIcon, {
  name: 'SpaceBarIcon',
});
export { SpaceBarIcon };
