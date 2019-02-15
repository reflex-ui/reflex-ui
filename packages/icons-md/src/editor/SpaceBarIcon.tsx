import * as React from 'react';
// @ts-ignore Could not find a declaration file for module 'swgs'.
// tslint:disable-next-line:import-name
import Svg, { Path } from 'swgs';

import {
  OptionalFlexSvgProps,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const SpaceBarIcon = reflexComponent<OptionalFlexSvgProps>({
  name: 'SpaceBarIcon',
})((props: OptionalFlexSvgProps) => (
  <SvgIcon {...props}>
    <Svg>
      <Path d="M18 9v4H6V9H4v6h16V9z" />
    </Svg>
  </SvgIcon>
));
