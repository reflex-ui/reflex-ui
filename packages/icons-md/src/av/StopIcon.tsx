import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let StopIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M6 6h12v12H6z" />
    </Svg>
  </RfxSvgIcon>
);

StopIcon = processComponent<RfxSvgPropsOptional>(StopIcon, {
  name: 'StopIcon',
});
export { StopIcon };
