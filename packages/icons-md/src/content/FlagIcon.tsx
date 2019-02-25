import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  FlexSvgPropsOptional,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const FlagIcon = reflexComponent<FlexSvgPropsOptional>({
  name: 'FlagIcon',
})((props: FlexSvgPropsOptional) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z" />
    </Svg>
  </SvgIcon>
));
