import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  processComponent,
  RfxSvgPropsOptional,
  SvgIcon,
} from '@reflex-ui/core';

let StopIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M6 6h12v12H6z" />
    </Svg>
  </SvgIcon>
);

StopIcon = processComponent<RfxSvgPropsOptional>(StopIcon, {
  name: 'StopIcon',
});
export { StopIcon };
