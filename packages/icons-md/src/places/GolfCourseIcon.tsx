import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Circle, Path } from 'swgs';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let GolfCourseIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Circle cx={19.5} cy={19.5} r={1.5} />
      <Path d="M17 5.92L9 2v18H7v-1.73c-1.79.35-3 .99-3 1.73 0 1.1 2.69 2 6 2s6-.9 6-2c0-.99-2.16-1.81-5-1.97V8.98l6-3.06z" />
    </Svg>
  </RfxSvgIcon>
);

GolfCourseIcon = processComponent<RfxSvgPropsOptional>(GolfCourseIcon, {
  name: 'GolfCourseIcon',
});
export { GolfCourseIcon };
