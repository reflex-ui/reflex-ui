import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  FlexSvgPropsOptional,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const FunctionsIcon = reflexComponent<FlexSvgPropsOptional>({
  name: 'FunctionsIcon',
})((props: FlexSvgPropsOptional) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7z" />
    </Svg>
  </SvgIcon>
));
