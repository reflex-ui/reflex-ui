import * as React from 'react';
// @ts-ignore Could not find a declaration file for module 'swgs'.
// tslint:disable-next-line:import-name
import Svg, { Path } from 'swgs';

import {
  OptionalFlexSvgProps,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const EjectIcon = reflexComponent<OptionalFlexSvgProps>({
  name: 'EjectIcon',
})((props: OptionalFlexSvgProps) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M5 17h14v2H5zm7-12L5.33 15h13.34z" />
    </Svg>
  </SvgIcon>
));
