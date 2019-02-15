import * as React from 'react';
// @ts-ignore Could not find a declaration file for module 'swgs'.
// tslint:disable-next-line:import-name
import Svg, { Path } from 'swgs';

import {
  OptionalFlexSvgProps,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const TitleIcon = reflexComponent<OptionalFlexSvgProps>({
  name: 'TitleIcon',
})((props: OptionalFlexSvgProps) => (
  <SvgIcon {...props}>
    <Svg>
      <Path d="M5 4v3h5.5v12h3V7H19V4z" />
    </Svg>
  </SvgIcon>
));
