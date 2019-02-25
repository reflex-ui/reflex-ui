import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  FlexSvgPropsOptional,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const PauseIcon = reflexComponent<FlexSvgPropsOptional>({
  name: 'PauseIcon',
})((props: FlexSvgPropsOptional) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    </Svg>
  </SvgIcon>
));
