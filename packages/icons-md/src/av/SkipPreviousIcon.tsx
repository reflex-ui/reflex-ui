import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let SkipPreviousIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
    </Svg>
  </RfxSvgIcon>
);

SkipPreviousIcon = processComponent<RfxSvgPropsOptional>(SkipPreviousIcon, {
  name: 'SkipPreviousIcon',
});
export { SkipPreviousIcon };
