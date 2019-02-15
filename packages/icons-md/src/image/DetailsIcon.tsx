import * as React from 'react';
// @ts-ignore Could not find a declaration file for module 'swgs'.
// tslint:disable-next-line:import-name
import Svg, { Path } from 'swgs';

import {
  OptionalFlexSvgProps,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const DetailsIcon = reflexComponent<OptionalFlexSvgProps>({
  name: 'DetailsIcon',
})((props: OptionalFlexSvgProps) => (
  <SvgIcon {...props}>
    <Svg>
      <Path d="M3 4l9 16 9-16H3zm3.38 2h11.25L12 16 6.38 6z" />
    </Svg>
  </SvgIcon>
));
