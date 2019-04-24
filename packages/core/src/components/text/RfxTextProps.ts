/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Ref } from 'react';
import { Text, TextProps } from 'react-native';

import { ColorProps } from '../../color/ColorProps';
import { FlexboxProps } from '../../flexbox/FlexboxProps';
// tslint:disable-next-line:max-line-length
import { InteractionStatePropsOptional } from '../../interaction/InteractionStateProps';
import { DimensionsProps } from '../../responsiveness/DimensionsProps';
import { OnLayoutProps } from '../../responsiveness/OnLayoutProps';
import { MarginProps } from '../../spacing/MarginProps';
import { PaddingProps } from '../../spacing/PaddingProps';
import { ComponentChildrenProps } from '../ComponentChildrenProps';
import { ComponentThemeProps } from '../ComponentThemeProps';
import { RfxTextTheme } from './RfxTextTheme';

export interface RfxTextPropsBase<Props, Theme>
  extends ComponentChildrenProps<Props>,
    ComponentThemeProps<Props, Theme>,
    ColorProps,
    DimensionsProps,
    FlexboxProps,
    InteractionStatePropsOptional,
    MarginProps,
    OnLayoutProps,
    PaddingProps,
    TextProps {
  readonly ref?: Ref<Text>;
}

export type RfxTextPropsBaseOptional<Props, Theme> = Partial<
  RfxTextPropsBase<Props, Theme>
>;

export interface RfxTextProps
  extends RfxTextPropsBase<RfxTextProps, RfxTextTheme> {}

export type RfxTextPropsOptional = Partial<RfxTextProps>;
