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
import { ResponsivenessProps } from '../../responsiveness/ResponsivenessProps';
import { Size } from '../../sizing/Size';
import { ComponentChildrenProps } from '../ComponentChildrenProps';
import { ComponentThemeProps } from '../ComponentThemeProps';
import { RfxSvgTheme } from './RfxSvgTheme';

export interface RfxSvgProps
  extends ComponentChildrenProps<RfxSvgProps>,
    ComponentThemeProps<RfxSvgProps, RfxSvgTheme>,
    InteractionStatePropsOptional,
    PaletteThemeProps,
    ResponsivenessProps,
    SvgProps {
  readonly size?: Size;
}

export type RfxSvgPropsOptional = Partial<RfxSvgProps>;
