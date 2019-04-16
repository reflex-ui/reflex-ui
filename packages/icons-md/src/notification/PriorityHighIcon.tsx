import React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Circle, Path } from 'react-native-svg';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let PriorityHighIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Circle cx={12} cy={19} r={2} />
      <Path d="M10 3h4v12h-4z" />
    </Svg>
  </RfxSvgIcon>
);

PriorityHighIcon = processComponent<RfxSvgPropsOptional>(PriorityHighIcon, {
  name: 'PriorityHighIcon',
});
export { PriorityHighIcon };
