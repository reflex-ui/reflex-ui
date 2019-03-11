import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import { reflexComponent, RfxSvgPropsOptional, SvgIcon } from '@reflex-ui/core';

export const ViewCompactIcon = reflexComponent<RfxSvgPropsOptional>({
  name: 'ViewCompactIcon',
})((props: RfxSvgPropsOptional) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M3 19h6v-7H3v7zm7 0h12v-7H10v7zM3 5v6h19V5H3z" />
    </Svg>
  </SvgIcon>
));
