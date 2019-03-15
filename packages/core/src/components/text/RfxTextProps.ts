/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import { TextProps } from 'react-native';

// tslint:disable-next-line:max-line-length
import { InteractionStatePropsOptional } from '../../interaction/InteractionStateProps';
import { PaletteThemeProps } from '../../palette/PaletteThemeProps';
import { MarginProps } from '../../spacing/MarginProps';
import { PaddingProps } from '../../spacing/PaddingProps';
import { ComponentThemeGetter } from '../ComponentThemeGetter';
import { RfxTextTheme } from './RfxTextTheme';

export interface RfxTextProps
  extends TextProps,
    InteractionStatePropsOptional,
    MarginProps,
    PaddingProps,
    PaletteThemeProps {
  readonly children?: React.ReactNode;
  readonly getPatchTheme?: ComponentThemeGetter<RfxTextProps, RfxTextTheme>;
  readonly theme: RfxTextTheme;
}

export type RfxTextPropsOptional = Partial<RfxTextProps>;
