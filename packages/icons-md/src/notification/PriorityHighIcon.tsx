import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Circle, Path } from 'swgs';

import {
  processComponent,
  RfxSvgPropsOptional,
  SvgIcon,
} from '@reflex-ui/core';

let PriorityHighIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Circle cx={12} cy={19} r={2} />
      <Path d="M10 3h4v12h-4z" />
    </Svg>
  </SvgIcon>
);

PriorityHighIcon = processComponent<RfxSvgPropsOptional>(PriorityHighIcon, {
  name: 'PriorityHighIcon',
});
export { PriorityHighIcon };
