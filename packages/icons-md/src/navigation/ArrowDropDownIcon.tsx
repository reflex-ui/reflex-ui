import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import { reflexComponent, RfxSvgPropsOptional, SvgIcon } from '@reflex-ui/core';

export const ArrowDropDownIcon = reflexComponent<RfxSvgPropsOptional>({
  name: 'ArrowDropDownIcon',
})((props: RfxSvgPropsOptional) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M7 10l5 5 5-5z" />
    </Svg>
  </SvgIcon>
));
