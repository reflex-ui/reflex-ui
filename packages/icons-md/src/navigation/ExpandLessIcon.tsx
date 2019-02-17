import * as React from 'react';
// @ts-ignore Could not find a declaration file for module 'swgs'.
// tslint:disable-next-line:import-name
import Svg, { Path } from 'swgs';

import {
  OptionalFlexSvgProps,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const ExpandLessIcon = reflexComponent<OptionalFlexSvgProps>({
  name: 'ExpandLessIcon',
})((props: OptionalFlexSvgProps) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
    </Svg>
  </SvgIcon>
));
