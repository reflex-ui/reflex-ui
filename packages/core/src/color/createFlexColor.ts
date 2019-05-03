/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { InteractionType } from '../interaction/InteractionType';
import { createColorGamut } from './createColorGamut';
// tslint:disable-next-line:max-line-length
import { createLayeredColorUsingColorOnly } from './createLayeredColorUsingColorOnly';
// tslint:disable-next-line:max-line-length
import { createLayeredColorUsingOnColorOnly } from './createLayeredColorUsingOnColorOnly';
import { FlexColor } from './FlexColor';
import { FlexColorFactoryInput } from './FlexColorFactoryInput';
import { invertLayeredColor } from './invertLayeredColor';

export const createFlexColor = ({
  containedColor,
  containedColorDisabled,
  containedColorFactory,
  containedInvertedColor = invertLayeredColor(containedColor),
  containedInvertedColorDisabled,
  uncontainedColor = createLayeredColorUsingOnColorOnly(containedColor),
  uncontainedColorDisabled,
  uncontainedColorFactory,
  uncontainedInvertedColor = createLayeredColorUsingColorOnly(containedColor),
  uncontainedInvertedColorDisabled,
}: FlexColorFactoryInput): FlexColor => ({
  activated: createColorGamut({
    containedColor,
    containedColorFactory,
    containedInvertedColor,
    interactionType: InteractionType.Activated,
    uncontainedColor,
    uncontainedColorFactory,
    uncontainedInvertedColor,
  }),
  disabled: {
    contained: containedColorDisabled,
    containedInverted: containedInvertedColorDisabled,
    uncontained: uncontainedColorDisabled,
    uncontainedInverted: uncontainedInvertedColorDisabled,
  },
  enabled: createColorGamut({
    containedColor,
    containedColorFactory,
    containedInvertedColor,
    interactionType: InteractionType.Enabled,
    uncontainedColor,
    uncontainedColorFactory,
    uncontainedInvertedColor,
  }),
  focused: createColorGamut({
    containedColor,
    containedColorFactory,
    containedInvertedColor,
    interactionType: InteractionType.Focused,
    uncontainedColor,
    uncontainedColorFactory,
    uncontainedInvertedColor,
  }),
  hovered: createColorGamut({
    containedColor,
    containedColorFactory,
    containedInvertedColor,
    interactionType: InteractionType.Hovered,
    uncontainedColor,
    uncontainedColorFactory,
    uncontainedInvertedColor,
  }),
  pressed: createColorGamut({
    containedColor,
    containedColorFactory,
    containedInvertedColor,
    interactionType: InteractionType.Pressed,
    uncontainedColor,
    uncontainedColorFactory,
    uncontainedInvertedColor,
  }),
});
