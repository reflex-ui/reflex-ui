import * as React from 'react';
// @ts-ignore Could not find a declaration file for module 'swgs'.
// tslint:disable-next-line:import-name
import Svg, { Path } from 'swgs';

import {
  OptionalFlexSvgProps,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const SignalCellularConnectedNoInternet0BarIcon = reflexComponent<
  OptionalFlexSvgProps
>({
  name: 'SignalCellularConnectedNoInternet0BarIcon',
})((props: OptionalFlexSvgProps) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path fillOpacity={0.3} d="M22 8V2L2 22h16V8z" />
      <Path d="M20 22h2v-2h-2v2zm0-12v8h2v-8h-2z" />
    </Svg>
  </SvgIcon>
));
