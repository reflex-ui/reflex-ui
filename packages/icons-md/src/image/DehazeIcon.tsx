import React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'react-native-svg';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let DehazeIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M2 15.5v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20v-2H2z" />
    </Svg>
  </RfxSvgIcon>
);

DehazeIcon = processComponent<RfxSvgPropsOptional>(DehazeIcon, {
  name: 'DehazeIcon',
});
export { DehazeIcon };
