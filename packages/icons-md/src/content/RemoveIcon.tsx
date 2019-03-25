import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  processComponent,
  RfxSvgPropsOptional,
  SvgIcon,
} from '@reflex-ui/core';

let RemoveIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M19 13H5v-2h14v2z" />
    </Svg>
  </SvgIcon>
);

RemoveIcon = processComponent<RfxSvgPropsOptional>(RemoveIcon, {
  name: 'RemoveIcon',
});
export { RemoveIcon };
