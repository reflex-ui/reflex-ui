import * as React from 'react';
// @ts-ignore Could not find a declaration file for module 'swgs'.
// tslint:disable-next-line:import-name
import Svg, { Path } from 'swgs';

import {
  OptionalFlexSvgProps,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const CallMadeIcon = reflexComponent<OptionalFlexSvgProps>({
  name: 'CallMadeIcon',
})((props: OptionalFlexSvgProps) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z" />
    </Svg>
  </SvgIcon>
));
