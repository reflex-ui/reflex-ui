/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { GestureResponderEvent } from 'react-native';

import { ColorProps } from '../../color/ColorProps';
import { DimensionsProps } from '../../responsiveness/DimensionsProps';
import { OnLayoutProps } from '../../responsiveness/OnLayoutProps';
import { ComponentChildrenProps } from '../ComponentChildrenProps';
import { ComponentThemeProps } from '../ComponentThemeProps';
import { ModalTheme } from './ModalTheme';

export interface ModalPropsBase
  extends ColorProps,
    DimensionsProps,
    OnLayoutProps {
  readonly displayBackdrop?: boolean;
  readonly isOpen?: boolean;
  readonly onBackdropPress?: (event: GestureResponderEvent) => void;
}

export interface ModalProps
  extends ComponentChildrenProps<ModalProps>,
    ComponentThemeProps<ModalProps, ModalTheme>,
    ModalPropsBase {}

export type ModalPropsOptional = Partial<ModalProps>;
