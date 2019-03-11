import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'swgs';

import { reflexComponent, RfxSvgPropsOptional, SvgIcon } from '@reflex-ui/core';

export const ViewColumnIcon = reflexComponent<RfxSvgPropsOptional>({
  name: 'ViewColumnIcon',
})((props: RfxSvgPropsOptional) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z" />
    </Svg>
  </SvgIcon>
));
