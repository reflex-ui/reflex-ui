import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  FlexSvgPropsOptional,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const CallMadeIcon = reflexComponent<FlexSvgPropsOptional>({
  name: 'CallMadeIcon',
})((props: FlexSvgPropsOptional) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z" />
    </Svg>
  </SvgIcon>
));
