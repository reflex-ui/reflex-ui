import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  processComponent,
  RfxSvgPropsOptional,
  SvgIcon,
} from '@reflex-ui/core';

let SignalCellular3BarIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path fillOpacity={0.3} d="M2 22h20V2z" />
      <Path d="M17 7L2 22h15z" />
    </Svg>
  </SvgIcon>
);

SignalCellular3BarIcon = processComponent<RfxSvgPropsOptional>(
  SignalCellular3BarIcon,
  {
    name: 'SignalCellular3BarIcon',
  },
);
export { SignalCellular3BarIcon };
