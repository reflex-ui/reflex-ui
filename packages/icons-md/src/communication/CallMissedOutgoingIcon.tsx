import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  processComponent,
  RfxSvgPropsOptional,
  SvgIcon,
} from '@reflex-ui/core';

let CallMissedOutgoingIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M3 8.41l9 9 7-7V15h2V7h-8v2h4.59L12 14.59 4.41 7 3 8.41z" />
    </Svg>
  </SvgIcon>
);

CallMissedOutgoingIcon = processComponent<RfxSvgPropsOptional>(
  CallMissedOutgoingIcon,
  {
    name: 'CallMissedOutgoingIcon',
  },
);
export { CallMissedOutgoingIcon };
