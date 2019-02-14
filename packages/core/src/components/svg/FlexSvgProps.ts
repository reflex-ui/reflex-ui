/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { SvgProps } from 'react-native-svg';

import { PaletteThemeProps } from '../../palette';
import { SizingProps } from '../../sizing/SizingProps';
import { MarginProps } from '../../spacing';
import { FlexSvgSubPropsGetter } from './FlexSvgSubPropsGetter';
import { FlexSvgTheme } from './FlexSvgTheme';

export interface FlexSvgProps
  extends MarginProps,
    PaletteThemeProps,
    SizingProps,
    SvgProps {
  readonly children?: React.ReactNode;
  readonly color?: string;
  readonly getSubProps?: FlexSvgSubPropsGetter;
  readonly skipContainer?: boolean;
  readonly theme: FlexSvgTheme;
}

export type OptionalFlexSvgProps = Partial<FlexSvgProps>;
