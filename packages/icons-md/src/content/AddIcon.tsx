import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import {
  FlexSvgPropsOptional,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const AddIcon = reflexComponent<FlexSvgPropsOptional>({
  name: 'AddIcon',
})((props: FlexSvgPropsOptional) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
    </Svg>
  </SvgIcon>
));
