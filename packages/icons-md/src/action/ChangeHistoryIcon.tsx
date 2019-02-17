import * as React from 'react';
// @ts-ignore Could not find a declaration file for module 'swgs'.
// tslint:disable-next-line:import-name
import Svg, { Path } from 'swgs';

import {
  OptionalFlexSvgProps,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const ChangeHistoryIcon = reflexComponent<OptionalFlexSvgProps>({
  name: 'ChangeHistoryIcon',
})((props: OptionalFlexSvgProps) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z" />
    </Svg>
  </SvgIcon>
));
