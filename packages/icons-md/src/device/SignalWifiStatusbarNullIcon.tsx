import * as React from 'react';
// @ts-ignore Could not find a declaration file for module 'swgs'.
// tslint:disable-next-line:import-name
import Svg, { Path } from 'swgs';

import {
  OptionalFlexSvgProps,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const SignalWifiStatusbarNullIcon = reflexComponent<
  OptionalFlexSvgProps
>({
  name: 'SignalWifiStatusbarNullIcon',
})((props: OptionalFlexSvgProps) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 26 24">
      <Path d="M13 4c4.25 0 7.62 1.51 9.68 2.75L13 18.8 3.33 6.75C5.38 5.51 8.75 4 13 4m0-2C5.74 2 .9 5.96.42 6.32l12.57 15.66.01.02.01-.01L25.58 6.32C25.1 5.96 20.26 2 13 2z" />
    </Svg>
  </SvgIcon>
));
