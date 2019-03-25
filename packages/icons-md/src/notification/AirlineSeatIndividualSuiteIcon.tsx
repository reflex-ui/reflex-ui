import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let AirlineSeatIndividualSuiteIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M7 13c1.65 0 3-1.35 3-3S8.65 7 7 7s-3 1.35-3 3 1.35 3 3 3zm12-6h-8v7H3V7H1v10h22v-6c0-2.21-1.79-4-4-4z" />
    </Svg>
  </RfxSvgIcon>
);

AirlineSeatIndividualSuiteIcon = processComponent<RfxSvgPropsOptional>(
  AirlineSeatIndividualSuiteIcon,
  {
    name: 'AirlineSeatIndividualSuiteIcon',
  },
);
export { AirlineSeatIndividualSuiteIcon };
