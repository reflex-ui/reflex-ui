import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Circle } from 'swgs';

import { reflexComponent, RfxSvgPropsOptional, SvgIcon } from '@reflex-ui/core';

export const Brightness1Icon = reflexComponent<RfxSvgPropsOptional>({
  name: 'Brightness1Icon',
})((props: RfxSvgPropsOptional) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Circle cx={12} cy={12} r={10} />
    </Svg>
  </SvgIcon>
));
