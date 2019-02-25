import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  FlexSvgPropsOptional,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const PlayArrowIcon = reflexComponent<FlexSvgPropsOptional>({
  name: 'PlayArrowIcon',
})((props: FlexSvgPropsOptional) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M8 5v14l11-7z" />
    </Svg>
  </SvgIcon>
));
