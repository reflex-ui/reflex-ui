import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import { reflexComponent, RfxSvgPropsOptional, SvgIcon } from '@reflex-ui/core';

export const CallReceivedIcon = reflexComponent<RfxSvgPropsOptional>({
  name: 'CallReceivedIcon',
})((props: RfxSvgPropsOptional) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M20 5.41L18.59 4 7 15.59V9H5v10h10v-2H8.41z" />
    </Svg>
  </SvgIcon>
));
