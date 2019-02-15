import * as React from 'react';
// @ts-ignore Could not find a declaration file for module 'swgs'.
// tslint:disable-next-line:import-name
import Svg, { Path } from 'swgs';

import {
  OptionalFlexSvgProps,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const ArrowDropDownIcon = reflexComponent<OptionalFlexSvgProps>({
  name: 'ArrowDropDownIcon',
})((props: OptionalFlexSvgProps) => (
  <SvgIcon {...props}>
    <Svg>
      <Path d="M7 10l5 5 5-5z" />
    </Svg>
  </SvgIcon>
));
