import * as React from 'react';
// @ts-ignore Could not find a declaration file for module 'swgs'.
// tslint:disable-next-line:import-name
import Svg, { Path } from 'swgs';

import {
  OptionalFlexSvgProps,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const FastForwardIcon = reflexComponent<OptionalFlexSvgProps>({
  name: 'FastForwardIcon',
})((props: OptionalFlexSvgProps) => (
  <SvgIcon {...props}>
    <Svg>
      <Path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z" />
    </Svg>
  </SvgIcon>
));
