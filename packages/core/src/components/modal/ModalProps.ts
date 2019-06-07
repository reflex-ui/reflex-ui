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
import { OpenCloseTransitionProps } from '../../transition';
import { ComponentChildrenProps } from '../ComponentChildrenProps';
import {
  ComponentThemeProps,
  ComponentThemePropsOptional,
} from '../ComponentThemeProps';
import { ModalTheme } from './ModalTheme';

export interface ModalPropsBase
  extends ColorProps,
    DimensionsProps,
    OnLayoutProps {
  readonly displayBackdrop?: boolean;
  readonly onBackdropPress?: (event: GestureResponderEvent) => void;
}

export type ModalPropsBaseOptional = Partial<ModalPropsBase>;

export interface ModalProps
  extends ComponentChildrenProps<ModalProps>,
    ComponentThemeProps<ModalProps, ModalTheme>,
    ModalPropsBase,
    OpenCloseTransitionProps<ModalProps> {}

export interface ModalPropsOptional
  extends ComponentChildrenProps<ModalProps>,
    ComponentThemePropsOptional<ModalProps, ModalTheme>,
    ModalPropsBaseOptional,
    OpenCloseTransitionProps<ModalProps> {}
