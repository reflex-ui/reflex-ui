import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let ArrowDropUpIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M7 14l5-5 5 5z" />
    </Svg>
  </RfxSvgIcon>
);

ArrowDropUpIcon = processComponent<RfxSvgPropsOptional>(ArrowDropUpIcon, {
  name: 'ArrowDropUpIcon',
});
export { ArrowDropUpIcon };
