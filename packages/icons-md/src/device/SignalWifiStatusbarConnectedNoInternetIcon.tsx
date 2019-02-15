import * as React from 'react';
// @ts-ignore Could not find a declaration file for module 'swgs'.
// tslint:disable-next-line:import-name
import Svg, { Path } from 'swgs';

import {
  OptionalFlexSvgProps,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const SignalWifiStatusbarConnectedNoInternetIcon = reflexComponent<
  OptionalFlexSvgProps
>({
  name: 'SignalWifiStatusbarConnectedNoInternetIcon',
})((props: OptionalFlexSvgProps) => (
  <SvgIcon {...props}>
    <Svg width={26} height={24} viewBox="0 0 26 24" {...props}>
      <Path
        fillOpacity={0.3}
        d="M24.24 8l1.35-1.68C25.1 5.96 20.26 2 13 2S.9 5.96.42 6.32l12.57 15.66.01.02.01-.01L20 13.28V8h4.24z"
      />
      <Path d="M22 22h2v-2h-2v2zm0-12v8h2v-8h-2z" />
    </Svg>
  </SvgIcon>
));
