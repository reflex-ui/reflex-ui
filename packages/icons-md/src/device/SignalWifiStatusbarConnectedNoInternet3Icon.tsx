import React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'react-native-svg';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let SignalWifiStatusbarConnectedNoInternet3Icon: React.ComponentType<
  RfxSvgPropsOptional
> = (props: RfxSvgPropsOptional) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 26 24">
      <Path
        fillOpacity={0.3}
        d="M24.24 8l1.35-1.68C25.1 5.96 20.26 2 13 2S.9 5.96.42 6.32l12.57 15.66.01.02.01-.01L20 13.28V8h4.24z"
      />
      <Path d="M20 13.28V8.71C18.35 7.87 15.94 7 13 7c-5.44 0-9.07 2.97-9.44 3.24l9.43 11.75.01.01.01-.01L20 13.28zM22 20h2v2h-2zm0-10h2v8h-2z" />
    </Svg>
  </RfxSvgIcon>
);

SignalWifiStatusbarConnectedNoInternet3Icon = processComponent<
  RfxSvgPropsOptional
>(SignalWifiStatusbarConnectedNoInternet3Icon, {
  name: 'SignalWifiStatusbarConnectedNoInternet3Icon',
});
export { SignalWifiStatusbarConnectedNoInternet3Icon };
