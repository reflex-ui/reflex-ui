import React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'react-native-svg';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let ViewStreamIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M4 18h17v-6H4v6zM4 5v6h17V5H4z" />
    </Svg>
  </RfxSvgIcon>
);

ViewStreamIcon = processComponent<RfxSvgPropsOptional>(ViewStreamIcon, {
  name: 'ViewStreamIcon',
});
export { ViewStreamIcon };
