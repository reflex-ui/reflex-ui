import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  FlexSvgPropsOptional,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const ArrowDropUpIcon = reflexComponent<FlexSvgPropsOptional>({
  name: 'ArrowDropUpIcon',
})((props: FlexSvgPropsOptional) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M7 14l5-5 5 5z" />
    </Svg>
  </SvgIcon>
));
