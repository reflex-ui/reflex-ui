import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  processComponent,
  RfxSvgPropsOptional,
  SvgIcon,
} from '@reflex-ui/core';

let SignalCellular4BarIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M2 22h20V2z" />
    </Svg>
  </SvgIcon>
);

SignalCellular4BarIcon = processComponent<RfxSvgPropsOptional>(
  SignalCellular4BarIcon,
  {
    name: 'SignalCellular4BarIcon',
  },
);
export { SignalCellular4BarIcon };
