import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let SignalWifiStatusbarConnectedNoInternetIcon: React.ComponentType<
  RfxSvgPropsOptional
> = (props: RfxSvgPropsOptional) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 26 24">
      <Path
        fillOpacity={0.3}
        d="M24.24 8l1.35-1.68C25.1 5.96 20.26 2 13 2S.9 5.96.42 6.32l12.57 15.66.01.02.01-.01L20 13.28V8h4.24z"
      />
      <Path d="M22 22h2v-2h-2v2zm0-12v8h2v-8h-2z" />
    </Svg>
  </RfxSvgIcon>
);

SignalWifiStatusbarConnectedNoInternetIcon = processComponent<
  RfxSvgPropsOptional
>(SignalWifiStatusbarConnectedNoInternetIcon, {
  name: 'SignalWifiStatusbarConnectedNoInternetIcon',
});
export { SignalWifiStatusbarConnectedNoInternetIcon };
