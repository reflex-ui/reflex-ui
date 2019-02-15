import * as React from 'react';
// @ts-ignore Could not find a declaration file for module 'swgs'.
// tslint:disable-next-line:import-name
import Svg, { Path } from 'swgs';

import {
  OptionalFlexSvgProps,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const Crop32Icon = reflexComponent<OptionalFlexSvgProps>({
  name: 'Crop32Icon',
})((props: OptionalFlexSvgProps) => (
  <SvgIcon {...props}>
    <Svg>
      <Path d="M19 4H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H5V6h14v12z" />
    </Svg>
  </SvgIcon>
));
