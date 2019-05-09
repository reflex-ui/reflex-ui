/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Column,
  Row,
  Size,
  SpaceBetween,
  Surface,
  usePalette,
} from '@reflex-ui/core';
import React from 'react';

const Box = () => (
  <Surface
    height={50}
    margin={Size.XS}
    paletteColor={usePalette().palette.primary}
    width={50}
  />
);

const ViewScreen: React.SFC<{}> = (): JSX.Element => (
  <Column>
    <Row>
      <Box />
      <Box />
    </Row>
    <SpaceBetween>
      <Box />
      <Box />
    </SpaceBetween>
    <SpaceBetween maxWidth={300}>
      <Box />
      <Box />
    </SpaceBetween>
    <SpaceBetween maxWidth={300}>
      <Row>
        <Box />
        <Box />
      </Row>
      <Box />
    </SpaceBetween>
    <SpaceBetween maxWidth={300}>
      <Row>
        <Box />
        <Box />
      </Row>
      <Row>
        <Box />
        <Box />
      </Row>
    </SpaceBetween>
  </Column>
);

ViewScreen.displayName = 'ViewScreen';

export { ViewScreen };
