import React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'react-native-svg';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let AdjustIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z" />
    </Svg>
  </RfxSvgIcon>
);

AdjustIcon = processComponent<RfxSvgPropsOptional>(AdjustIcon, {
  name: 'AdjustIcon',
});
export { AdjustIcon };
