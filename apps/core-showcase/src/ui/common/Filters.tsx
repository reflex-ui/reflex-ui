/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Column,
  Paragraph1,
  RfxViewPropsOptional,
  Size,
} from '@reflex-ui/core';
import React from 'react';

export interface FiltersProps extends RfxViewPropsOptional {
  readonly onClosePress?: () => void;
}

const loremCopy = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  'sed do eiusmod tempor incididunt ut labore et dolore magna',
  'aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
  'ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  'Duis aute irure dolor in reprehenderit in voluptate velit',
  'esse cillum dolore eu fugiat nulla pariatur. Excepteur sint',
  'occaecat cupidatat non proident, sunt in culpa qui officia',
  'deserunt mollit anim id est laborum.',
].join(' ');

const Filters: React.SFC<FiltersProps> = ({
  onClosePress,
  ...rfxViewProps
}: FiltersProps): JSX.Element => (
  <Column {...rfxViewProps}>
    <Paragraph1 marginVertical={Size.M}>Lorem ipsum.</Paragraph1>
    <Paragraph1 marginVertical={Size.M}>Lorem ipsum.</Paragraph1>
    <Paragraph1 marginVertical={Size.M}>Lorem ipsum.</Paragraph1>
    <Paragraph1 marginVertical={Size.M}>{loremCopy}</Paragraph1>
    <Paragraph1 marginVertical={Size.M}>{loremCopy}</Paragraph1>
    <Paragraph1 marginVertical={Size.M}>{loremCopy}</Paragraph1>
    <Paragraph1 marginVertical={Size.M}>{loremCopy}</Paragraph1>
    <Paragraph1 marginVertical={Size.M}>Last Line.</Paragraph1>
  </Column>
);

Filters.displayName = 'Filters';

export { Filters };
