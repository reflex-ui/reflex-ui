import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let VerticalAlignBottomIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z" />
    </Svg>
  </RfxSvgIcon>
);

VerticalAlignBottomIcon = processComponent<RfxSvgPropsOptional>(
  VerticalAlignBottomIcon,
  {
    name: 'VerticalAlignBottomIcon',
  },
);
export { VerticalAlignBottomIcon };
