import React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'react-native-svg';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let RemoveIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M19 13H5v-2h14v2z" />
    </Svg>
  </RfxSvgIcon>
);

RemoveIcon = processComponent<RfxSvgPropsOptional>(RemoveIcon, {
  name: 'RemoveIcon',
});
export { RemoveIcon };
