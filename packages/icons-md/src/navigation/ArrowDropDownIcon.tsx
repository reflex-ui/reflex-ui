import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  processComponent,
  RfxSvgPropsOptional,
  SvgIcon,
} from '@reflex-ui/core';

let ArrowDropDownIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M7 10l5 5 5-5z" />
    </Svg>
  </SvgIcon>
);

ArrowDropDownIcon = processComponent<RfxSvgPropsOptional>(ArrowDropDownIcon, {
  name: 'ArrowDropDownIcon',
});
export { ArrowDropDownIcon };
