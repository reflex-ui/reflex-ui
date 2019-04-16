import React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'react-native-svg';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let EjectIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M5 17h14v2H5zm7-12L5.33 15h13.34z" />
    </Svg>
  </RfxSvgIcon>
);

EjectIcon = processComponent<RfxSvgPropsOptional>(EjectIcon, {
  name: 'EjectIcon',
});
export { EjectIcon };
