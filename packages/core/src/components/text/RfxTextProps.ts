/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TextProps } from 'react-native';

import { FlexboxProps } from '../../flexbox/FlexboxProps';
// tslint:disable-next-line:max-line-length
import { InteractionStatePropsOptional } from '../../interaction/InteractionStateProps';
import { PaletteThemeProps } from '../../palette/PaletteThemeProps';
import { DimensionsProps } from '../../responsiveness/DimensionsProps';
import { ResponsivenessProps } from '../../responsiveness/ResponsivenessProps';
import { MarginProps } from '../../spacing/MarginProps';
import { PaddingProps } from '../../spacing/PaddingProps';
import { ComponentChildrenProps } from '../ComponentChildrenProps';
import { ComponentThemeProps } from '../ComponentThemeProps';
import { RfxTextTheme } from './RfxTextTheme';

export interface RfxTextPropsBase
  extends DimensionsProps,
    FlexboxProps,
    InteractionStatePropsOptional,
    MarginProps,
    PaddingProps,
    PaletteThemeProps,
    ResponsivenessProps,
    TextProps {}

export interface RfxTextProps
  extends ComponentChildrenProps<RfxTextProps>,
    ComponentThemeProps<RfxTextProps, RfxTextTheme>,
    RfxTextPropsBase {}

export type RfxTextPropsOptional = Partial<RfxTextProps>;
