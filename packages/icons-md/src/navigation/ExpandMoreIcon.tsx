import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let ExpandMoreIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
    </Svg>
  </RfxSvgIcon>
);

ExpandMoreIcon = processComponent<RfxSvgPropsOptional>(ExpandMoreIcon, {
  name: 'ExpandMoreIcon',
});
export { ExpandMoreIcon };
