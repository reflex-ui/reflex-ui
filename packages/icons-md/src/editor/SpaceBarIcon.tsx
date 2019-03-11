import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import { reflexComponent, RfxSvgPropsOptional, SvgIcon } from '@reflex-ui/core';

export const SpaceBarIcon = reflexComponent<RfxSvgPropsOptional>({
  name: 'SpaceBarIcon',
})((props: RfxSvgPropsOptional) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M18 9v4H6V9H4v6h16V9z" />
    </Svg>
  </SvgIcon>
));
