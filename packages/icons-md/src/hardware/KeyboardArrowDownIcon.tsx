import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  FlexSvgPropsOptional,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const KeyboardArrowDownIcon = reflexComponent<FlexSvgPropsOptional>({
  name: 'KeyboardArrowDownIcon',
})((props: FlexSvgPropsOptional) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
    </Svg>
  </SvgIcon>
));
