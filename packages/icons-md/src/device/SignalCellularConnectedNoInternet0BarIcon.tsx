import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let SignalCellularConnectedNoInternet0BarIcon: React.ComponentType<
  RfxSvgPropsOptional
> = (props: RfxSvgPropsOptional) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path fillOpacity={0.3} d="M22 8V2L2 22h16V8z" />
      <Path d="M20 22h2v-2h-2v2zm0-12v8h2v-8h-2z" />
    </Svg>
  </RfxSvgIcon>
);

SignalCellularConnectedNoInternet0BarIcon = processComponent<
  RfxSvgPropsOptional
>(SignalCellularConnectedNoInternet0BarIcon, {
  name: 'SignalCellularConnectedNoInternet0BarIcon',
});
export { SignalCellularConnectedNoInternet0BarIcon };
