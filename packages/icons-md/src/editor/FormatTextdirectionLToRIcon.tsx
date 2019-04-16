import React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'react-native-svg';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let FormatTextdirectionLToRIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M9 10v5h2V4h2v11h2V4h2V2H9C6.79 2 5 3.79 5 6s1.79 4 4 4zm12 8l-4-4v3H5v2h12v3l4-4z" />
    </Svg>
  </RfxSvgIcon>
);

FormatTextdirectionLToRIcon = processComponent<RfxSvgPropsOptional>(
  FormatTextdirectionLToRIcon,
  {
    name: 'FormatTextdirectionLToRIcon',
  },
);
export { FormatTextdirectionLToRIcon };
