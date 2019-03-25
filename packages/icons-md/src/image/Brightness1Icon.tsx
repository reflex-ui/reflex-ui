import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Circle } from 'swgs';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let Brightness1Icon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Circle cx={12} cy={12} r={10} />
    </Svg>
  </RfxSvgIcon>
);

Brightness1Icon = processComponent<RfxSvgPropsOptional>(Brightness1Icon, {
  name: 'Brightness1Icon',
});
export { Brightness1Icon };
