import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  FlexSvgPropsOptional,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const PublishIcon = reflexComponent<FlexSvgPropsOptional>({
  name: 'PublishIcon',
})((props: FlexSvgPropsOptional) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z" />
    </Svg>
  </SvgIcon>
));
