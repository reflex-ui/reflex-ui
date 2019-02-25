import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  FlexSvgPropsOptional,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const NearMeIcon = reflexComponent<FlexSvgPropsOptional>({
  name: 'NearMeIcon',
})((props: FlexSvgPropsOptional) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z" />
    </Svg>
  </SvgIcon>
));
