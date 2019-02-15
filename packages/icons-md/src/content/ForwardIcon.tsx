import * as React from 'react';
// @ts-ignore Could not find a declaration file for module 'swgs'.
// tslint:disable-next-line:import-name
import Svg, { Path } from 'swgs';

import {
  OptionalFlexSvgProps,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const ForwardIcon = reflexComponent<OptionalFlexSvgProps>({
  name: 'ForwardIcon',
})((props: OptionalFlexSvgProps) => (
  <SvgIcon {...props}>
    <Svg>
      <Path d="M12 8V4l8 8-8 8v-4H4V8z" />
    </Svg>
  </SvgIcon>
));
