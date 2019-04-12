/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { SvgProps } from 'react-native-svg';

import { ColorProps } from '../../color/ColorProps';
// tslint:disable-next-line:max-line-length
import { InteractionStatePropsOptional } from '../../interaction/InteractionStateProps';
import { OnLayoutProps } from '../../responsiveness/OnLayoutProps';
import { Size } from '../../sizing/Size';
import { ComponentChildrenProps } from '../ComponentChildrenProps';
import { ComponentThemeProps } from '../ComponentThemeProps';
import { RfxSvgTheme } from './RfxSvgTheme';

export interface RfxSvgPropsBase
  extends ColorProps,
    InteractionStatePropsOptional,
    OnLayoutProps,
    SvgProps {
  readonly size?: Size;
}

export type RfxSvgPropsBaseOptional = Partial<RfxSvgPropsBase>;

export interface RfxSvgProps
  extends ComponentChildrenProps<RfxSvgProps>,
    ComponentThemeProps<RfxSvgProps, RfxSvgTheme>,
    RfxSvgPropsBase {}

export type RfxSvgPropsOptional = Partial<RfxSvgProps>;
