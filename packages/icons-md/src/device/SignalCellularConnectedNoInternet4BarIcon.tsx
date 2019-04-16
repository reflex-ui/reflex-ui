import React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'react-native-svg';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let SignalCellularConnectedNoInternet4BarIcon: React.ComponentType<
  RfxSvgPropsOptional
> = (props: RfxSvgPropsOptional) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M20 18h2v-8h-2v8zm0 4h2v-2h-2v2zM2 22h16V8h4V2L2 22z" />
    </Svg>
  </RfxSvgIcon>
);

SignalCellularConnectedNoInternet4BarIcon = processComponent<
  RfxSvgPropsOptional
>(SignalCellularConnectedNoInternet4BarIcon, {
  name: 'SignalCellularConnectedNoInternet4BarIcon',
});
export { SignalCellularConnectedNoInternet4BarIcon };
