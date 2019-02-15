import * as React from 'react';
// @ts-ignore Could not find a declaration file for module 'swgs'.
// tslint:disable-next-line:import-name
import Svg, { Path } from 'swgs';

import {
  OptionalFlexSvgProps,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const NearMeIcon = reflexComponent<OptionalFlexSvgProps>({
  name: 'NearMeIcon',
})((props: OptionalFlexSvgProps) => (
  <SvgIcon {...props}>
    <Svg>
      <Path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z" />
    </Svg>
  </SvgIcon>
));
