import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  processComponent,
  RfxSvgPropsOptional,
  SvgIcon,
} from '@reflex-ui/core';

let NavigationIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
    </Svg>
  </SvgIcon>
);

NavigationIcon = processComponent<RfxSvgPropsOptional>(NavigationIcon, {
  name: 'NavigationIcon',
});
export { NavigationIcon };
