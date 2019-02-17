import * as React from 'react';
// @ts-ignore Could not find a declaration file for module 'swgs'.
// tslint:disable-next-line:import-name
import Svg, { Path } from 'swgs';

import {
  OptionalFlexSvgProps,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const NavigationIcon = reflexComponent<OptionalFlexSvgProps>({
  name: 'NavigationIcon',
})((props: OptionalFlexSvgProps) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
    </Svg>
  </SvgIcon>
));
