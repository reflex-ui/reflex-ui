/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TouchableWithoutFeedbackProps } from 'react-native';

import { InteractionProps } from '../../interaction';
import { ComponentThemeProps } from '../ComponentThemeProps';
import { TouchableTheme } from './TouchableTheme';

export interface TouchablePropsBase<Props, Theme>
  extends ComponentThemeProps<Props, Theme>,
    InteractionProps,
    TouchableWithoutFeedbackProps {}

export type TouchablePropsBaseOptional<Props, Theme> = Partial<
  TouchablePropsBase<Props, Theme>
>;

export interface TouchableProps
  extends TouchablePropsBase<TouchableProps, TouchableTheme> {}

export type TouchablePropsOptional = Partial<TouchableProps>;
