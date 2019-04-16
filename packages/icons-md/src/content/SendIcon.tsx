import React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'react-native-svg';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let SendIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
    </Svg>
  </RfxSvgIcon>
);

SendIcon = processComponent<RfxSvgPropsOptional>(SendIcon, {
  name: 'SendIcon',
});
export { SendIcon };
