import * as React from 'react';
// @ts-ignore Could not find a declaration file for module 'swgs'.
// tslint:disable-next-line:import-name
import Svg, { Path } from 'swgs';

import {
  OptionalFlexSvgProps,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const SignalCellularConnectedNoInternet3BarIcon = reflexComponent<
  OptionalFlexSvgProps
>({
  name: 'SignalCellularConnectedNoInternet3BarIcon',
})((props: OptionalFlexSvgProps) => (
  <SvgIcon {...props}>
    <Svg>
      <Path fillOpacity={0.3} d="M22 8V2L2 22h16V8z" />
      <Path d="M17 22V7L2 22h15zm3-12v8h2v-8h-2zm0 12h2v-2h-2v2z" />
    </Svg>
  </SvgIcon>
));
