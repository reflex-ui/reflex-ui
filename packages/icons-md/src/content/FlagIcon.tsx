import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let FlagIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z" />
    </Svg>
  </RfxSvgIcon>
);

FlagIcon = processComponent<RfxSvgPropsOptional>(FlagIcon, {
  name: 'FlagIcon',
});
export { FlagIcon };
