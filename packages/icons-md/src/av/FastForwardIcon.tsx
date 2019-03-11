import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import { reflexComponent, RfxSvgPropsOptional, SvgIcon } from '@reflex-ui/core';

export const FastForwardIcon = reflexComponent<RfxSvgPropsOptional>({
  name: 'FastForwardIcon',
})((props: RfxSvgPropsOptional) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z" />
    </Svg>
  </SvgIcon>
));
