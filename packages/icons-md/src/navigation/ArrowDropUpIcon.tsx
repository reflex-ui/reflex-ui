import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import { reflexComponent, RfxSvgPropsOptional, SvgIcon } from '@reflex-ui/core';

export const ArrowDropUpIcon = reflexComponent<RfxSvgPropsOptional>({
  name: 'ArrowDropUpIcon',
})((props: RfxSvgPropsOptional) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M7 14l5-5 5 5z" />
    </Svg>
  </SvgIcon>
));
