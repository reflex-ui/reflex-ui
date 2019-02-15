import * as React from 'react';
// @ts-ignore Could not find a declaration file for module 'swgs'.
// tslint:disable-next-line:import-name
import Svg, { Path } from 'swgs';

import {
  OptionalFlexSvgProps,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const SignalCellular1BarIcon = reflexComponent<OptionalFlexSvgProps>({
  name: 'SignalCellular1BarIcon',
})((props: OptionalFlexSvgProps) => (
  <SvgIcon {...props}>
    <Svg>
      <Path fillOpacity={0.3} d="M2 22h20V2z" />
      <Path d="M12 12L2 22h10z" />
    </Svg>
  </SvgIcon>
));
