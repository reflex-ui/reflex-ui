import React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'react-native-svg';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let FlashOnIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M7 2v11h3v9l7-12h-4l4-8z" />
    </Svg>
  </RfxSvgIcon>
);

FlashOnIcon = processComponent<RfxSvgPropsOptional>(FlashOnIcon, {
  name: 'FlashOnIcon',
});
export { FlashOnIcon };
