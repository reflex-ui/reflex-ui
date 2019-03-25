import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let FastForwardIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z" />
    </Svg>
  </RfxSvgIcon>
);

FastForwardIcon = processComponent<RfxSvgPropsOptional>(FastForwardIcon, {
  name: 'FastForwardIcon',
});
export { FastForwardIcon };
