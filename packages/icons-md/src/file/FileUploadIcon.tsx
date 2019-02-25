import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  FlexSvgPropsOptional,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const FileUploadIcon = reflexComponent<FlexSvgPropsOptional>({
  name: 'FileUploadIcon',
})((props: FlexSvgPropsOptional) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
    </Svg>
  </SvgIcon>
));
