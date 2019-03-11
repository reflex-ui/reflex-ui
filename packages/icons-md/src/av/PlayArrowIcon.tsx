import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import { reflexComponent, RfxSvgPropsOptional, SvgIcon } from '@reflex-ui/core';

export const PlayArrowIcon = reflexComponent<RfxSvgPropsOptional>({
  name: 'PlayArrowIcon',
})((props: RfxSvgPropsOptional) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M8 5v14l11-7z" />
    </Svg>
  </SvgIcon>
));
