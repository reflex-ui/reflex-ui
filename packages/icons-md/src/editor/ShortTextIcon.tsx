import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import { reflexComponent, RfxSvgPropsOptional, SvgIcon } from '@reflex-ui/core';

export const ShortTextIcon = reflexComponent<RfxSvgPropsOptional>({
  name: 'ShortTextIcon',
})((props: RfxSvgPropsOptional) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M4 9h16v2H4zm0 4h10v2H4z" />
    </Svg>
  </SvgIcon>
));
