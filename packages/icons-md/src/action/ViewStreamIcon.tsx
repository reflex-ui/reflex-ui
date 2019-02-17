import * as React from 'react';
// @ts-ignore Could not find a declaration file for module 'swgs'.
// tslint:disable-next-line:import-name
import Svg, { Path } from 'swgs';

import {
  OptionalFlexSvgProps,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const ViewStreamIcon = reflexComponent<OptionalFlexSvgProps>({
  name: 'ViewStreamIcon',
})((props: OptionalFlexSvgProps) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M4 18h17v-6H4v6zM4 5v6h17V5H4z" />
    </Svg>
  </SvgIcon>
));
