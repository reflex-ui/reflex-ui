import React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'react-native-svg';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let FormatTextdirectionRToLIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M10 10v5h2V4h2v11h2V4h2V2h-8C7.79 2 6 3.79 6 6s1.79 4 4 4zm-2 7v-3l-4 4 4 4v-3h12v-2H8z" />
    </Svg>
  </RfxSvgIcon>
);

FormatTextdirectionRToLIcon = processComponent<RfxSvgPropsOptional>(
  FormatTextdirectionRToLIcon,
  {
    name: 'FormatTextdirectionRToLIcon',
  },
);
export { FormatTextdirectionRToLIcon };
