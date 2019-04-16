import React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'react-native-svg';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let FormatStrikethroughIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z" />
    </Svg>
  </RfxSvgIcon>
);

FormatStrikethroughIcon = processComponent<RfxSvgPropsOptional>(
  FormatStrikethroughIcon,
  {
    name: 'FormatStrikethroughIcon',
  },
);
export { FormatStrikethroughIcon };
