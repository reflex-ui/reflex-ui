import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  processComponent,
  RfxSvgPropsOptional,
  SvgIcon,
} from '@reflex-ui/core';

let SignalCellular1BarIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path fillOpacity={0.3} d="M2 22h20V2z" />
      <Path d="M12 12L2 22h10z" />
    </Svg>
  </SvgIcon>
);

SignalCellular1BarIcon = processComponent<RfxSvgPropsOptional>(
  SignalCellular1BarIcon,
  {
    name: 'SignalCellular1BarIcon',
  },
);
export { SignalCellular1BarIcon };
