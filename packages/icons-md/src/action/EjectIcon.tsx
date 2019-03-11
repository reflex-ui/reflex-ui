import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import { reflexComponent, RfxSvgPropsOptional, SvgIcon } from '@reflex-ui/core';

export const EjectIcon = reflexComponent<RfxSvgPropsOptional>({
  name: 'EjectIcon',
})((props: RfxSvgPropsOptional) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M5 17h14v2H5zm7-12L5.33 15h13.34z" />
    </Svg>
  </SvgIcon>
));
