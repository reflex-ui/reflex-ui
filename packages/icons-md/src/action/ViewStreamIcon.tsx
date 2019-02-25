import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  FlexSvgPropsOptional,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const ViewStreamIcon = reflexComponent<FlexSvgPropsOptional>({
  name: 'ViewStreamIcon',
})((props: FlexSvgPropsOptional) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M4 18h17v-6H4v6zM4 5v6h17V5H4z" />
    </Svg>
  </SvgIcon>
));
