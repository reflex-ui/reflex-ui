import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  FlexSvgPropsOptional,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const SkipPreviousIcon = reflexComponent<FlexSvgPropsOptional>({
  name: 'SkipPreviousIcon',
})((props: FlexSvgPropsOptional) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
    </Svg>
  </SvgIcon>
));
