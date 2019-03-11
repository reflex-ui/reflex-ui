import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import { reflexComponent, RfxSvgPropsOptional, SvgIcon } from '@reflex-ui/core';

export const RemoveIcon = reflexComponent<RfxSvgPropsOptional>({
  name: 'RemoveIcon',
})((props: RfxSvgPropsOptional) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M19 13H5v-2h14v2z" />
    </Svg>
  </SvgIcon>
));
