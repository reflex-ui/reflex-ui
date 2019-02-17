import * as React from 'react';
// @ts-ignore Could not find a declaration file for module 'swgs'.
// tslint:disable-next-line:import-name
import Svg, { Path } from 'swgs';

import {
  OptionalFlexSvgProps,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const VerticalAlignTopIcon = reflexComponent<OptionalFlexSvgProps>({
  name: 'VerticalAlignTopIcon',
})((props: OptionalFlexSvgProps) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z" />
    </Svg>
  </SvgIcon>
));
