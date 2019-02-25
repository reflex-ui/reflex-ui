import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  FlexSvgPropsOptional,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const SignalCellular0BarIcon = reflexComponent<FlexSvgPropsOptional>({
  name: 'SignalCellular0BarIcon',
})((props: FlexSvgPropsOptional) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path fillOpacity={0.3} d="M2 22h20V2z" />
    </Svg>
  </SvgIcon>
));
