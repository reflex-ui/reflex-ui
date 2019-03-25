import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  processComponent,
  RfxSvgPropsOptional,
  SvgIcon,
} from '@reflex-ui/core';

let PlayArrowIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M8 5v14l11-7z" />
    </Svg>
  </SvgIcon>
);

PlayArrowIcon = processComponent<RfxSvgPropsOptional>(PlayArrowIcon, {
  name: 'PlayArrowIcon',
});
export { PlayArrowIcon };
