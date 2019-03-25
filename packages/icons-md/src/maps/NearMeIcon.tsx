import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  processComponent,
  RfxSvgPropsOptional,
  SvgIcon,
} from '@reflex-ui/core';

let NearMeIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z" />
    </Svg>
  </SvgIcon>
);

NearMeIcon = processComponent<RfxSvgPropsOptional>(NearMeIcon, {
  name: 'NearMeIcon',
});
export { NearMeIcon };
