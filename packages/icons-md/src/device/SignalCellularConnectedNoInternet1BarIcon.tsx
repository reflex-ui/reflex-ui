import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  FlexSvgPropsOptional,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const SignalCellularConnectedNoInternet1BarIcon = reflexComponent<
  FlexSvgPropsOptional
>({
  name: 'SignalCellularConnectedNoInternet1BarIcon',
})((props: FlexSvgPropsOptional) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path fillOpacity={0.3} d="M22 8V2L2 22h16V8z" />
      <Path d="M20 10v8h2v-8h-2zm-8 12V12L2 22h10zm8 0h2v-2h-2v2z" />
    </Svg>
  </SvgIcon>
));
