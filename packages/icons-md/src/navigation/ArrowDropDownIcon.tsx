import React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'react-native-svg';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let ArrowDropDownIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M7 10l5 5 5-5z" />
    </Svg>
  </RfxSvgIcon>
);

ArrowDropDownIcon = processComponent<RfxSvgPropsOptional>(ArrowDropDownIcon, {
  name: 'ArrowDropDownIcon',
});
export { ArrowDropDownIcon };
