import React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'react-native-svg';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let ShortTextIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M4 9h16v2H4zm0 4h10v2H4z" />
    </Svg>
  </RfxSvgIcon>
);

ShortTextIcon = processComponent<RfxSvgPropsOptional>(ShortTextIcon, {
  name: 'ShortTextIcon',
});
export { ShortTextIcon };
