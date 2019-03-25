import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let ViewCarouselIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z" />
    </Svg>
  </RfxSvgIcon>
);

ViewCarouselIcon = processComponent<RfxSvgPropsOptional>(ViewCarouselIcon, {
  name: 'ViewCarouselIcon',
});
export { ViewCarouselIcon };
