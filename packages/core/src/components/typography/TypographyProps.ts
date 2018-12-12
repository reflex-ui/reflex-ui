/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import { TextProps, TextStyle } from 'react-native';

import { MarginProps } from '../../margin';
import { PaletteThemeProps } from '../../palette/PaletteThemeProps';
import { InjectableSubTheme } from '../subcomponents';

export interface TypographyProps
  extends TextProps,
    MarginProps,
    PaletteThemeProps {
  readonly children?: React.ReactNode;
  readonly theme: InjectableSubTheme<TypographyProps, TextProps, TextStyle>;
}

export type OptionalTypographyProps = Partial<TypographyProps>;
