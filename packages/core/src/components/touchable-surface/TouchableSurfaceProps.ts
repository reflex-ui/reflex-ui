/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TouchableWithoutFeedbackProps } from 'react-native';

import { InteractionProps } from '../../interaction';
import { SurfacePropsBase } from '../surface/SurfaceProps';
import { TouchableSurfaceTheme } from './TouchableSurfaceTheme';
import { TouchableSurfaceVariant } from './TouchableSurfaceVariant';

export type TouchableSurfacePropsBase<Props, Theme> = InteractionProps &
  SurfacePropsBase<Props, Theme> &
  TouchableWithoutFeedbackProps;

export type TouchableSurfacePropsBaseOptional<Props, Theme> = Partial<
  TouchableSurfacePropsBase<Props, Theme>
>;

export interface TouchableSurfaceProps
  extends TouchableSurfacePropsBase<
    TouchableSurfaceProps,
    TouchableSurfaceTheme
  > {
  readonly variant: TouchableSurfaceVariant;
}

export type TouchableSurfacePropsOptional = Partial<TouchableSurfaceProps>;
