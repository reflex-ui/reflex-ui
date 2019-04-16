import React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'react-native-svg';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let ChangeHistoryIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z" />
    </Svg>
  </RfxSvgIcon>
);

ChangeHistoryIcon = processComponent<RfxSvgPropsOptional>(ChangeHistoryIcon, {
  name: 'ChangeHistoryIcon',
});
export { ChangeHistoryIcon };
