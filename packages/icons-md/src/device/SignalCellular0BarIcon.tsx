import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  processComponent,
  RfxSvgPropsOptional,
  SvgIcon,
} from '@reflex-ui/core';

let SignalCellular0BarIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path fillOpacity={0.3} d="M2 22h20V2z" />
    </Svg>
  </SvgIcon>
);

SignalCellular0BarIcon = processComponent<RfxSvgPropsOptional>(
  SignalCellular0BarIcon,
  {
    name: 'SignalCellular0BarIcon',
  },
);
export { SignalCellular0BarIcon };
