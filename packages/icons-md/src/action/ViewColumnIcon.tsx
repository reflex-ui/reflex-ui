import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let ViewColumnIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z" />
    </Svg>
  </RfxSvgIcon>
);

ViewColumnIcon = processComponent<RfxSvgPropsOptional>(ViewColumnIcon, {
  name: 'ViewColumnIcon',
});
export { ViewColumnIcon };
