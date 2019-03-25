import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let SignalCellularNullIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M20 6.83V20H6.83L20 6.83M22 2L2 22h20V2z" />
    </Svg>
  </RfxSvgIcon>
);

SignalCellularNullIcon = processComponent<RfxSvgPropsOptional>(
  SignalCellularNullIcon,
  {
    name: 'SignalCellularNullIcon',
  },
);
export { SignalCellularNullIcon };
