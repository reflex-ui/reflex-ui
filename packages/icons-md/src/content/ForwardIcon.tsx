import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  processComponent,
  RfxSvgPropsOptional,
  SvgIcon,
} from '@reflex-ui/core';

let ForwardIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M12 8V4l8 8-8 8v-4H4V8z" />
    </Svg>
  </SvgIcon>
);

ForwardIcon = processComponent<RfxSvgPropsOptional>(ForwardIcon, {
  name: 'ForwardIcon',
});
export { ForwardIcon };
