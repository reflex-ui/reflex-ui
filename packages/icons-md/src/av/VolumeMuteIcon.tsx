import * as React from 'react';
// @ts-ignore Could not find a declaration file for module 'swgs'.
// tslint:disable-next-line:import-name
import Svg, { Path } from 'swgs';

import {
  OptionalFlexSvgProps,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const VolumeMuteIcon = reflexComponent<OptionalFlexSvgProps>({
  name: 'VolumeMuteIcon',
})((props: OptionalFlexSvgProps) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M7 9v6h4l5 5V4l-5 5H7z" />
    </Svg>
  </SvgIcon>
));
