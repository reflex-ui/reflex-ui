import * as React from 'react';
// @ts-ignore Could not find a declaration file for module 'swgs'.
// tslint:disable-next-line:import-name
import Svg, { Circle } from 'swgs';

import {
  OptionalFlexSvgProps,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const FiberManualRecordIcon = reflexComponent<OptionalFlexSvgProps>({
  name: 'FiberManualRecordIcon',
})((props: OptionalFlexSvgProps) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Circle fill="#010101" cx={12} cy={12} r={8} />
    </Svg>
  </SvgIcon>
));
