import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  FlexSvgPropsOptional,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const NavigateBeforeIcon = reflexComponent<FlexSvgPropsOptional>({
  name: 'NavigateBeforeIcon',
})((props: FlexSvgPropsOptional) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
    </Svg>
  </SvgIcon>
));
