import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  processComponent,
  RfxSvgPropsOptional,
  SvgIcon,
} from '@reflex-ui/core';

let DetailsIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M3 4l9 16 9-16H3zm3.38 2h11.25L12 16 6.38 6z" />
    </Svg>
  </SvgIcon>
);

DetailsIcon = processComponent<RfxSvgPropsOptional>(DetailsIcon, {
  name: 'DetailsIcon',
});
export { DetailsIcon };
