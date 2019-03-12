/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { SvgProps } from 'react-native-svg';

// tslint:disable-next-line:max-line-length
import { InteractionStatePropsOptional } from '../../interaction/InteractionStateProps';
import { PaletteThemeProps } from '../../palette';
import { SizingProps } from '../../sizing/SizingProps';
import { MarginProps } from '../../spacing';
import { RfxSvgChildrenPropsGetter } from './RfxSvgChildrenPropsGetter';
import { RfxSvgTheme } from './RfxSvgTheme';

export interface RfxSvgProps
  extends InteractionStatePropsOptional,
    MarginProps,
    PaletteThemeProps,
    SizingProps,
    SvgProps {
  readonly children?: React.ReactNode;
  readonly getChildrenProps?: RfxSvgChildrenPropsGetter;
  readonly skipContainer?: boolean;
  readonly theme: RfxSvgTheme;
}

export type RfxSvgPropsOptional = Partial<RfxSvgProps>;
