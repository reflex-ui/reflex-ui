/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Ref } from 'react';
import { View, ViewProps } from 'react-native';

import { ColorProps } from '../../color/ColorProps';
import { FlexboxProps } from '../../flexbox/FlexboxProps';
import { DimensionsProps } from '../../responsiveness/DimensionsProps';
import { OnLayoutProps } from '../../responsiveness/OnLayoutProps';
import { SizingPropsOptional } from '../../sizing/SizingProps';
import { MarginProps } from '../../spacing/MarginProps';
import { PaddingProps } from '../../spacing/PaddingProps';
import { OpenCloseTransitionProps } from '../../transition';
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

export interface RfxViewPropsBase<Props, Theme>
  extends ComponentChildrenProps<Props>,
    ComponentThemeProps<Props, Theme>,
    ColorProps,
    DimensionsProps,
    FlexboxProps,
    MarginProps,
    OnLayoutProps,
    OpenCloseTransitionProps<Props>,
    PaddingProps,
    SizingPropsOptional,
    ViewProps {
  readonly ref?: Ref<View>;
  readonly shouldProvideColor?: boolean;
}

export type RfxViewPropsBaseOptional<Props, Theme> = Partial<
  RfxViewPropsBase<Props, Theme>
>;

export interface RfxViewProps
  extends RfxViewPropsBase<RfxViewProps, RfxViewTheme> {}

export type RfxViewPropsOptional = Partial<RfxViewProps>;
