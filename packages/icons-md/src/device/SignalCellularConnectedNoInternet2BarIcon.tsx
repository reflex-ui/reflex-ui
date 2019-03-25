import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let SignalCellularConnectedNoInternet2BarIcon: React.ComponentType<
  RfxSvgPropsOptional
> = (props: RfxSvgPropsOptional) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path fillOpacity={0.3} d="M22 8V2L2 22h16V8z" />
      <Path d="M14 22V10L2 22h12zm6-12v8h2v-8h-2zm0 12h2v-2h-2v2z" />
    </Svg>
  </RfxSvgIcon>
);

SignalCellularConnectedNoInternet2BarIcon = processComponent<
  RfxSvgPropsOptional
>(SignalCellularConnectedNoInternet2BarIcon, {
  name: 'SignalCellularConnectedNoInternet2BarIcon',
});
export { SignalCellularConnectedNoInternet2BarIcon };
