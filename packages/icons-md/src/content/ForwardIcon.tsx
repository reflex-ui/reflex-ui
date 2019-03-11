import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import { reflexComponent, RfxSvgPropsOptional, SvgIcon } from '@reflex-ui/core';

export const ForwardIcon = reflexComponent<RfxSvgPropsOptional>({
  name: 'ForwardIcon',
})((props: RfxSvgPropsOptional) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M12 8V4l8 8-8 8v-4H4V8z" />
    </Svg>
  </SvgIcon>
));
