/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ViewProps } from 'react-native';

import { FlexboxProps } from '../../flexbox/FlexboxProps';
import { PaletteThemeProps } from '../../palette/PaletteThemeProps';
import { DimensionsProps } from '../../responsiveness/DimensionsProps';
import { ResponsivenessProps } from '../../responsiveness/ResponsivenessProps';
import { SizingPropsOptional } from '../../sizing/SizingProps';
import { MarginProps } from '../../spacing/MarginProps';
import { PaddingProps } from '../../spacing/PaddingProps';
import { ComponentChildrenProps } from '../ComponentChildrenProps';
import { ComponentThemeProps } from '../ComponentThemeProps';
import { RfxViewTheme } from './RfxViewTheme';

/**
 * Ideally we wouldn't need this Base type, we'd have everything
 * in RfxViewProps like this:
 *
 * export interface RfxViewProps<Props = RfxViewProps, Theme = RfxViewTheme>
 *   extends ComponentChildrenProps<Props>,
 *     ComponentThemeProps<Props, Theme>,
 *     ...
 *
 * But TypeScript doesn't support using RfxViewProps
 * as default value in generics (i.e. Props = RfxViewProps). Error:
 * Type parameter 'Props' has a circular default.ts(2716)
 */
export interface RfxViewPropsBase
  extends DimensionsProps,
    FlexboxProps,
    MarginProps,
    PaddingProps,
    PaletteThemeProps,
    ResponsivenessProps,
    SizingPropsOptional,
    ViewProps {}

export interface RfxViewProps
  extends ComponentChildrenProps<RfxViewProps>,
    ComponentThemeProps<RfxViewProps, RfxViewTheme>,
    RfxViewPropsBase {}

export type RfxViewPropsOptional = Partial<RfxViewProps>;
