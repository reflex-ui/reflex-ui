import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import { reflexComponent, RfxSvgPropsOptional, SvgIcon } from '@reflex-ui/core';

export const TrendingFlatIcon = reflexComponent<RfxSvgPropsOptional>({
  name: 'TrendingFlatIcon',
})((props: RfxSvgPropsOptional) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M22 12l-4-4v3H3v2h15v3z" />
    </Svg>
  </SvgIcon>
));
