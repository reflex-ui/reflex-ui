import React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'react-native-svg';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let VolumeMuteIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M7 9v6h4l5 5V4l-5 5H7z" />
    </Svg>
  </RfxSvgIcon>
);

VolumeMuteIcon = processComponent<RfxSvgPropsOptional>(VolumeMuteIcon, {
  name: 'VolumeMuteIcon',
});
export { VolumeMuteIcon };
