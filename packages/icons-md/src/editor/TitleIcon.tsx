import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  processComponent,
  RfxSvgPropsOptional,
  SvgIcon,
} from '@reflex-ui/core';

let TitleIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M5 4v3h5.5v12h3V7H19V4z" />
    </Svg>
  </SvgIcon>
);

TitleIcon = processComponent<RfxSvgPropsOptional>(TitleIcon, {
  name: 'TitleIcon',
});
export { TitleIcon };
