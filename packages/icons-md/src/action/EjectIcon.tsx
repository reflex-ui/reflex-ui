import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  processComponent,
  RfxSvgPropsOptional,
  SvgIcon,
} from '@reflex-ui/core';

let EjectIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M5 17h14v2H5zm7-12L5.33 15h13.34z" />
    </Svg>
  </SvgIcon>
);

EjectIcon = processComponent<RfxSvgPropsOptional>(EjectIcon, {
  name: 'EjectIcon',
});
export { EjectIcon };
