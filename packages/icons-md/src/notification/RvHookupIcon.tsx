import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  FlexSvgPropsOptional,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const RvHookupIcon = reflexComponent<FlexSvgPropsOptional>({
  name: 'RvHookupIcon',
})((props: FlexSvgPropsOptional) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M20 17v-6c0-1.1-.9-2-2-2H7V7l-3 3 3 3v-2h4v3H4v3c0 1.1.9 2 2 2h2c0 1.66 1.34 3 3 3s3-1.34 3-3h8v-2h-2zm-9 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm7-6h-4v-3h4v3zM17 2v2H9v2h8v2l3-3z" />
    </Svg>
  </SvgIcon>
));
