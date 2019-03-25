import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let TrendingFlatIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M22 12l-4-4v3H3v2h15v3z" />
    </Svg>
  </RfxSvgIcon>
);

TrendingFlatIcon = processComponent<RfxSvgPropsOptional>(TrendingFlatIcon, {
  name: 'TrendingFlatIcon',
});
export { TrendingFlatIcon };
