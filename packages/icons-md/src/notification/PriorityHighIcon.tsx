import * as React from 'react';
// @ts-ignore Could not find a declaration file for module 'swgs'.
// tslint:disable-next-line:import-name
import Svg, { Circle, Path } from 'swgs';

import {
  OptionalFlexSvgProps,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const PriorityHighIcon = reflexComponent<OptionalFlexSvgProps>({
  name: 'PriorityHighIcon',
})((props: OptionalFlexSvgProps) => (
  <SvgIcon {...props}>
    <Svg>
      <Circle cx={12} cy={19} r={2} />
      <Path d="M10 3h4v12h-4z" />
    </Svg>
  </SvgIcon>
));
