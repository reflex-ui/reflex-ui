/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { InteractionEvent } from '@reflex-ui/core';
import { ViewStyle } from 'react-native';

import { ElementMeasure } from './ElementMeasure';

export interface ComponentRippleStylesFactoryInput {
  readonly color: string;
  readonly elementMeasure: ElementMeasure;
  // readonly height: number;
  readonly interactionEvent?: InteractionEvent;
  readonly maxDiameter?: number;
  readonly style: ViewStyle;
  // readonly width: number;
}
