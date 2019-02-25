import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  FlexSvgPropsOptional,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const KeyboardArrowUpIcon = reflexComponent<FlexSvgPropsOptional>({
  name: 'KeyboardArrowUpIcon',
})((props: FlexSvgPropsOptional) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
    </Svg>
  </SvgIcon>
));
