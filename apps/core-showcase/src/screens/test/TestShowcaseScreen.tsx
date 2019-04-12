/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteContext, Paragraph1, Size, Surface } from '@reflex-ui/core';
import React, { useContext } from 'react';

const TestShowcaseScreen: React.SFC<{}> = (): JSX.Element => {
  const palette = useContext(PaletteContext);

  return (
    <Surface
      contained={false}
      height={100}
      margin={Size.M}
      paletteColor={palette.primaryDark}
      width={100}
    >
      <Paragraph1>Touch me! (contained=false)</Paragraph1>
    </Surface>
  );
};

TestShowcaseScreen.displayName = 'TestShowcaseScreen';

export { TestShowcaseScreen };
