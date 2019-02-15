import * as React from 'react';
// @ts-ignore Could not find a declaration file for module 'swgs'.
// tslint:disable-next-line:import-name
import Svg, { Path } from 'swgs';

import {
  OptionalFlexSvgProps,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const DragHandleIcon = reflexComponent<OptionalFlexSvgProps>({
  name: 'DragHandleIcon',
})((props: OptionalFlexSvgProps) => (
  <SvgIcon {...props}>
    <Svg>
      <Path d="M20 9H4v2h16V9zM4 15h16v-2H4v2z" />
    </Svg>
  </SvgIcon>
));
