import React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'react-native-svg';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let SignalWifiStatusbarConnectedNoInternet4Icon: React.ComponentType<
  RfxSvgPropsOptional
> = (props: RfxSvgPropsOptional) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 26 24">
      <Path d="M22 22h2v-2h-2v2zM13 2C5.74 2 .9 5.96.42 6.32l12.57 15.66.01.02.01-.01L20 13.28V8h4.24l1.35-1.68C25.1 5.96 20.26 2 13 2zm9 16h2v-8h-2v8z" />
    </Svg>
  </RfxSvgIcon>
);

SignalWifiStatusbarConnectedNoInternet4Icon = processComponent<
  RfxSvgPropsOptional
>(SignalWifiStatusbarConnectedNoInternet4Icon, {
  name: 'SignalWifiStatusbarConnectedNoInternet4Icon',
});
export { SignalWifiStatusbarConnectedNoInternet4Icon };
