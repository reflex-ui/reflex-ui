import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  FlexSvgPropsOptional,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const SignalCellularNullIcon = reflexComponent<FlexSvgPropsOptional>({
  name: 'SignalCellularNullIcon',
})((props: FlexSvgPropsOptional) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M20 6.83V20H6.83L20 6.83M22 2L2 22h20V2z" />
    </Svg>
  </SvgIcon>
));
