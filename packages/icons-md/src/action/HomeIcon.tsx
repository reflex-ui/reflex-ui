import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  FlexSvgPropsOptional,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const HomeIcon = reflexComponent<FlexSvgPropsOptional>({
  name: 'HomeIcon',
})((props: FlexSvgPropsOptional) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </Svg>
  </SvgIcon>
));
