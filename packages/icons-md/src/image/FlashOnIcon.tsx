import * as React from 'react';
// @ts-ignore Could not find a declaration file for module 'swgs'.
// tslint:disable-next-line:import-name
import Svg, { Path } from 'swgs';

import {
  OptionalFlexSvgProps,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const FlashOnIcon = reflexComponent<OptionalFlexSvgProps>({
  name: 'FlashOnIcon',
})((props: OptionalFlexSvgProps) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M7 2v11h3v9l7-12h-4l4-8z" />
    </Svg>
  </SvgIcon>
));
