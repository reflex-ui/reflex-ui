import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  FlexSvgPropsOptional,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const SpaceBarIcon = reflexComponent<FlexSvgPropsOptional>({
  name: 'SpaceBarIcon',
})((props: FlexSvgPropsOptional) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M18 9v4H6V9H4v6h16V9z" />
    </Svg>
  </SvgIcon>
));
