import React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'react-native-svg';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let CallMissedOutgoingIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M3 8.41l9 9 7-7V15h2V7h-8v2h4.59L12 14.59 4.41 7 3 8.41z" />
    </Svg>
  </RfxSvgIcon>
);

CallMissedOutgoingIcon = processComponent<RfxSvgPropsOptional>(
  CallMissedOutgoingIcon,
  {
    name: 'CallMissedOutgoingIcon',
  },
);
export { CallMissedOutgoingIcon };
