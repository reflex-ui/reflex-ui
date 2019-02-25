import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  FlexSvgPropsOptional,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const SignalCellular2BarIcon = reflexComponent<FlexSvgPropsOptional>({
  name: 'SignalCellular2BarIcon',
})((props: FlexSvgPropsOptional) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path fillOpacity={0.3} d="M2 22h20V2z" />
      <Path d="M14 10L2 22h12z" />
    </Svg>
  </SvgIcon>
));
