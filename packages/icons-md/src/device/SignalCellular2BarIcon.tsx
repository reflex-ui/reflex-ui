import React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'react-native-svg';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let SignalCellular2BarIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path fillOpacity={0.3} d="M2 22h20V2z" />
      <Path d="M14 10L2 22h12z" />
    </Svg>
  </RfxSvgIcon>
);

SignalCellular2BarIcon = processComponent<RfxSvgPropsOptional>(
  SignalCellular2BarIcon,
  {
    name: 'SignalCellular2BarIcon',
  },
);
export { SignalCellular2BarIcon };
