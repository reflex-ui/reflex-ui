import React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'react-native-svg';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let SignalWifiStatusbarConnectedNoInternet2Icon: React.ComponentType<
  RfxSvgPropsOptional
> = (props: RfxSvgPropsOptional) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 26 24">
      <Path
        fillOpacity={0.3}
        d="M24.24 8l1.35-1.68C25.1 5.96 20.26 2 13 2S.9 5.96.42 6.32l12.57 15.66.01.02.01-.01L20 13.28V8h4.24z"
      />
      <Path d="M5.45 12.59l7.54 9.4.01.01.01-.01L20 13.28v-1.09c-1.07-.73-3.59-2.19-7-2.19-4.36 0-7.26 2.38-7.55 2.59zM22 10v8h2v-8h-2zm0 12h2v-2h-2v2z" />
    </Svg>
  </RfxSvgIcon>
);

SignalWifiStatusbarConnectedNoInternet2Icon = processComponent<
  RfxSvgPropsOptional
>(SignalWifiStatusbarConnectedNoInternet2Icon, {
  name: 'SignalWifiStatusbarConnectedNoInternet2Icon',
});
export { SignalWifiStatusbarConnectedNoInternet2Icon };
