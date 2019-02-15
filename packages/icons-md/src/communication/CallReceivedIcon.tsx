import * as React from 'react';
// @ts-ignore Could not find a declaration file for module 'swgs'.
// tslint:disable-next-line:import-name
import Svg, { Path } from 'swgs';

import {
  OptionalFlexSvgProps,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const CallReceivedIcon = reflexComponent<OptionalFlexSvgProps>({
  name: 'CallReceivedIcon',
})((props: OptionalFlexSvgProps) => (
  <SvgIcon {...props}>
    <Svg>
      <Path d="M20 5.41L18.59 4 7 15.59V9H5v10h10v-2H8.41z" />
    </Svg>
  </SvgIcon>
));
