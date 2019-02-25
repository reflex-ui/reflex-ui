import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, G, Circle, Path } from 'swgs';

import {
  FlexSvgPropsOptional,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const FiberSmartRecordIcon = reflexComponent<FlexSvgPropsOptional>({
  name: 'FiberSmartRecordIcon',
})((props: FlexSvgPropsOptional) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <G fill="#010101">
        <Circle cx={9} cy={12} r={8} />
        <Path d="M17 4.26v2.09c2.33.82 4 3.04 4 5.65s-1.67 4.83-4 5.65v2.09c3.45-.89 6-4.01 6-7.74s-2.55-6.85-6-7.74z" />
      </G>
    </Svg>
  </SvgIcon>
));
