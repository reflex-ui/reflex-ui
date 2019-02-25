import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  FlexSvgPropsOptional,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const FlashOnIcon = reflexComponent<FlexSvgPropsOptional>({
  name: 'FlashOnIcon',
})((props: FlexSvgPropsOptional) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M7 2v11h3v9l7-12h-4l4-8z" />
    </Svg>
  </SvgIcon>
));
