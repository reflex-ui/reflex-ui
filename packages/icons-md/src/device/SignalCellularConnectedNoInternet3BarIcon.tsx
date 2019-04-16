import React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'react-native-svg';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let SignalCellularConnectedNoInternet3BarIcon: React.ComponentType<
  RfxSvgPropsOptional
> = (props: RfxSvgPropsOptional) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path fillOpacity={0.3} d="M22 8V2L2 22h16V8z" />
      <Path d="M17 22V7L2 22h15zm3-12v8h2v-8h-2zm0 12h2v-2h-2v2z" />
    </Svg>
  </RfxSvgIcon>
);

SignalCellularConnectedNoInternet3BarIcon = processComponent<
  RfxSvgPropsOptional
>(SignalCellularConnectedNoInternet3BarIcon, {
  name: 'SignalCellularConnectedNoInternet3BarIcon',
});
export { SignalCellularConnectedNoInternet3BarIcon };
