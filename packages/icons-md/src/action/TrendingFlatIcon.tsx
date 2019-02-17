import * as React from 'react';
// @ts-ignore Could not find a declaration file for module 'swgs'.
// tslint:disable-next-line:import-name
import Svg, { Path } from 'swgs';

import {
  OptionalFlexSvgProps,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const TrendingFlatIcon = reflexComponent<OptionalFlexSvgProps>({
  name: 'TrendingFlatIcon',
})((props: OptionalFlexSvgProps) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M22 12l-4-4v3H3v2h15v3z" />
    </Svg>
  </SvgIcon>
));
