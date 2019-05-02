/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Elevation, InteractionType } from '@reflex-ui/core';
import { ViewStyle } from 'react-native';

export type ElevationStyleGetter = (
  elevation: Elevation,
  interactionType?: InteractionType,
) => ViewStyle;
