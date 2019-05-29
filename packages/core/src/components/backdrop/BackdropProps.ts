/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TouchableWithoutFeedbackProps } from 'react-native';

import { SurfacePropsBase } from '../surface/SurfaceProps';
import { BackdropTheme } from './BackdropTheme';

export interface BackdropPropsBase<Props, Theme>
  extends SurfacePropsBase<Props, Theme>,
    TouchableWithoutFeedbackProps {}

export type BackdropPropsBaseOptional<Props, Theme> = Partial<
  BackdropPropsBase<Props, Theme>
>;

export interface BackdropProps
  extends BackdropPropsBase<BackdropProps, BackdropTheme> {}

export type BackdropPropsOptional = Partial<BackdropProps>;
