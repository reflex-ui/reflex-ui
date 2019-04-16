import React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'react-native-svg';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let CallReceivedIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M20 5.41L18.59 4 7 15.59V9H5v10h10v-2H8.41z" />
    </Svg>
  </RfxSvgIcon>
);

CallReceivedIcon = processComponent<RfxSvgPropsOptional>(CallReceivedIcon, {
  name: 'CallReceivedIcon',
});
export { CallReceivedIcon };
