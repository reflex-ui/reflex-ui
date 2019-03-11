import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import { reflexComponent, RfxSvgPropsOptional, SvgIcon } from '@reflex-ui/core';

export const SignalCellular4BarIcon = reflexComponent<RfxSvgPropsOptional>({
  name: 'SignalCellular4BarIcon',
})((props: RfxSvgPropsOptional) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M2 22h20V2z" />
    </Svg>
  </SvgIcon>
));
