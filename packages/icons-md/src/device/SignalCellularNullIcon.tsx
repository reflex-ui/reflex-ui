import * as React from 'react';
// @ts-ignore Could not find a declaration file for module 'swgs'.
// tslint:disable-next-line:import-name
import Svg, { Path } from 'swgs';

import {
  OptionalFlexSvgProps,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const SignalCellularNullIcon = reflexComponent<OptionalFlexSvgProps>({
  name: 'SignalCellularNullIcon',
})((props: OptionalFlexSvgProps) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M20 6.83V20H6.83L20 6.83M22 2L2 22h20V2z" />
    </Svg>
  </SvgIcon>
));
