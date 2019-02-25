import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  FlexSvgPropsOptional,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const SignalWifiStatusbar2BarIcon = reflexComponent<
  FlexSvgPropsOptional
>({
  name: 'SignalWifiStatusbar2BarIcon',
})((props: FlexSvgPropsOptional) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 26 24">
      <Path
        fillOpacity={0.3}
        d="M13.01 21.99L25.58 6.32C25.1 5.96 20.26 2 13 2S.9 5.96.42 6.32l12.57 15.66.01.02.01-.01z"
      />
      <Path d="M13.01 21.99l7.54-9.4C20.26 12.38 17.36 10 13 10c-4.36 0-7.26 2.38-7.55 2.59l7.54 9.4h.02z" />
    </Svg>
  </SvgIcon>
));
