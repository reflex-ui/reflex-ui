import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let FormatColorTextIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path fillOpacity={0.36} d="M0 20h24v4H0z" />
      <Path d="M11 3L5.5 17h2.25l1.12-3h6.25l1.12 3h2.25L13 3h-2zm-1.38 9L12 5.67 14.38 12H9.62z" />
    </Svg>
  </RfxSvgIcon>
);

FormatColorTextIcon = processComponent<RfxSvgPropsOptional>(
  FormatColorTextIcon,
  {
    name: 'FormatColorTextIcon',
  },
);
export { FormatColorTextIcon };
