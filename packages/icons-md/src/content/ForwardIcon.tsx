import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let ForwardIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M12 8V4l8 8-8 8v-4H4V8z" />
    </Svg>
  </RfxSvgIcon>
);

ForwardIcon = processComponent<RfxSvgPropsOptional>(ForwardIcon, {
  name: 'ForwardIcon',
});
export { ForwardIcon };
