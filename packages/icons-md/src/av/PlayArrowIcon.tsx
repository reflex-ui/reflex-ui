import React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'react-native-svg';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let PlayArrowIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M8 5v14l11-7z" />
    </Svg>
  </RfxSvgIcon>
);

PlayArrowIcon = processComponent<RfxSvgPropsOptional>(PlayArrowIcon, {
  name: 'PlayArrowIcon',
});
export { PlayArrowIcon };
