import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import { reflexComponent, RfxSvgPropsOptional, SvgIcon } from '@reflex-ui/core';

export const FormatQuoteIcon = reflexComponent<RfxSvgPropsOptional>({
  name: 'FormatQuoteIcon',
})((props: RfxSvgPropsOptional) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
    </Svg>
  </SvgIcon>
));
