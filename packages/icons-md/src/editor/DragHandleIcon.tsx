import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let DragHandleIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M20 9H4v2h16V9zM4 15h16v-2H4v2z" />
    </Svg>
  </RfxSvgIcon>
);

DragHandleIcon = processComponent<RfxSvgPropsOptional>(DragHandleIcon, {
  name: 'DragHandleIcon',
});
export { DragHandleIcon };
