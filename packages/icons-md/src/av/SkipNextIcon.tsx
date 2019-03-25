import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  processComponent,
  RfxSvgPropsOptional,
  SvgIcon,
} from '@reflex-ui/core';

let SkipNextIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
    </Svg>
  </SvgIcon>
);

SkipNextIcon = processComponent<RfxSvgPropsOptional>(SkipNextIcon, {
  name: 'SkipNextIcon',
});
export { SkipNextIcon };
