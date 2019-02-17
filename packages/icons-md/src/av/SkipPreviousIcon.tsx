import * as React from 'react';
// @ts-ignore Could not find a declaration file for module 'swgs'.
// tslint:disable-next-line:import-name
import Svg, { Path } from 'swgs';

import {
  OptionalFlexSvgProps,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const SkipPreviousIcon = reflexComponent<OptionalFlexSvgProps>({
  name: 'SkipPreviousIcon',
})((props: OptionalFlexSvgProps) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
    </Svg>
  </SvgIcon>
));
