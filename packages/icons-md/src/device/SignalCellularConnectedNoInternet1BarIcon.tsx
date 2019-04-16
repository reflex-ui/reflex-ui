import React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'react-native-svg';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let SignalCellularConnectedNoInternet1BarIcon: React.ComponentType<
  RfxSvgPropsOptional
> = (props: RfxSvgPropsOptional) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path fillOpacity={0.3} d="M22 8V2L2 22h16V8z" />
      <Path d="M20 10v8h2v-8h-2zm-8 12V12L2 22h10zm8 0h2v-2h-2v2z" />
    </Svg>
  </RfxSvgIcon>
);

SignalCellularConnectedNoInternet1BarIcon = processComponent<
  RfxSvgPropsOptional
>(SignalCellularConnectedNoInternet1BarIcon, {
  name: 'SignalCellularConnectedNoInternet1BarIcon',
});
export { SignalCellularConnectedNoInternet1BarIcon };
