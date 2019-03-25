import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Circle } from 'swgs';

import {
  processComponent,
  RfxSvgPropsOptional,
  SvgIcon,
} from '@reflex-ui/core';

let FiberManualRecordIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Circle fill="#010101" cx={12} cy={12} r={8} />
    </Svg>
  </SvgIcon>
);

FiberManualRecordIcon = processComponent<RfxSvgPropsOptional>(
  FiberManualRecordIcon,
  {
    name: 'FiberManualRecordIcon',
  },
);
export { FiberManualRecordIcon };
