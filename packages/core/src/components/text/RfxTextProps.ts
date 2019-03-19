/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TextProps } from 'react-native';

// tslint:disable-next-line:max-line-length
import { InteractionStatePropsOptional } from '../../interaction/InteractionStateProps';
import { PaletteThemeProps } from '../../palette/PaletteThemeProps';
import { MarginProps } from '../../spacing/MarginProps';
import { PaddingProps } from '../../spacing/PaddingProps';
import { ComponentChildrenProps } from '../ComponentChildrenProps';
import { ComponentThemeProps } from '../ComponentThemeProps';
import { RfxTextTheme } from './RfxTextTheme';

export interface RfxTextProps
  extends ComponentChildrenProps<RfxTextProps>,
    ComponentThemeProps<RfxTextProps, RfxTextTheme>,
    InteractionStatePropsOptional,
    MarginProps,
    PaddingProps,
    PaletteThemeProps,
    TextProps {}

export type RfxTextPropsOptional = Partial<RfxTextProps>;
