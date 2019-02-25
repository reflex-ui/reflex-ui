import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  FlexSvgPropsOptional,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const ChangeHistoryIcon = reflexComponent<FlexSvgPropsOptional>({
  name: 'ChangeHistoryIcon',
})((props: FlexSvgPropsOptional) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z" />
    </Svg>
  </SvgIcon>
));
