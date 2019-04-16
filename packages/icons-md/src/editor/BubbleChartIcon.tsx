import React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Circle } from 'react-native-svg';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let BubbleChartIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Circle cx={7.2} cy={14.4} r={3.2} />
      <Circle cx={14.8} cy={18} r={2} />
      <Circle cx={15.2} cy={8.8} r={4.8} />
    </Svg>
  </RfxSvgIcon>
);

BubbleChartIcon = processComponent<RfxSvgPropsOptional>(BubbleChartIcon, {
  name: 'BubbleChartIcon',
});
export { BubbleChartIcon };
