import * as React from 'react';
// @ts-ignore Could not find a declaration file for module 'swgs'.
// tslint:disable-next-line:import-name
import Svg, { Path } from 'swgs';

import {
  OptionalFlexSvgProps,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const SignalCellular2BarIcon = reflexComponent<OptionalFlexSvgProps>({
  name: 'SignalCellular2BarIcon',
})((props: OptionalFlexSvgProps) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path fillOpacity={0.3} d="M2 22h20V2z" />
      <Path d="M14 10L2 22h12z" />
    </Svg>
  </SvgIcon>
));
