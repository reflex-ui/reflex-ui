/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { OpenCloseAnimationConfig } from './OpenCloseAnimationConfig';
import { SliderPosition } from './SliderPosition';

export interface OpenCloseSliderTransitionFactoryInput
  extends OpenCloseAnimationConfig {
  readonly position: SliderPosition;
}
