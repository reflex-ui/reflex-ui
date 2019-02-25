import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  FlexSvgPropsOptional,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const VerticalAlignTopIcon = reflexComponent<FlexSvgPropsOptional>({
  name: 'VerticalAlignTopIcon',
})((props: FlexSvgPropsOptional) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z" />
    </Svg>
  </SvgIcon>
));
