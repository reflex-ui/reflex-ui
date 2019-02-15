import * as React from 'react';
// @ts-ignore Could not find a declaration file for module 'swgs'.
// tslint:disable-next-line:import-name
import Svg, { Path } from 'swgs';

import {
  OptionalFlexSvgProps,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const FileUploadIcon = reflexComponent<OptionalFlexSvgProps>({
  name: 'FileUploadIcon',
})((props: OptionalFlexSvgProps) => (
  <SvgIcon {...props}>
    <Svg>
      <Path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
    </Svg>
  </SvgIcon>
));
