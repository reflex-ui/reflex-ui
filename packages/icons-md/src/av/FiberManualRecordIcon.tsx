import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Circle } from 'swgs';

import {
  FlexSvgPropsOptional,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const FiberManualRecordIcon = reflexComponent<FlexSvgPropsOptional>({
  name: 'FiberManualRecordIcon',
})((props: FlexSvgPropsOptional) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Circle fill="#010101" cx={12} cy={12} r={8} />
    </Svg>
  </SvgIcon>
));
