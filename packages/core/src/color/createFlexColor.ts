/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { InteractionType } from '../interaction/InteractionType';
import { ColorGamut } from './ColorGamut';
import { FlexColor } from './FlexColor';
import { FlexColorFactoryInput } from './FlexColorFactoryInput';
import { LayeredColor } from './LayeredColor';
import { LayeredColorFactory } from './LayeredColorFactory';

export interface ColorGamutFactoryInput {
  readonly containedColor: LayeredColor;
  readonly containedColorFactory: LayeredColorFactory;
  readonly containedInvertedColor: LayeredColor;
  readonly interactionType: InteractionType;
  readonly uncontainedColor: LayeredColor;
  readonly uncontainedColorFactory: LayeredColorFactory;
  readonly uncontainedInvertedColor: LayeredColor;
}

export const createColorGamut = (
  config: ColorGamutFactoryInput,
): ColorGamut => ({
  contained: config.containedColorFactory({
    color: config.containedColor,
    interactionType: config.interactionType,
  }),
  containedInverted: config.containedColorFactory({
    color: config.containedInvertedColor,
    interactionType: config.interactionType,
  }),
  uncontained: config.uncontainedColorFactory({
    color: config.uncontainedColor,
    interactionType: config.interactionType,
  }),
  uncontainedInverted: config.uncontainedColorFactory({
    color: config.uncontainedInvertedColor,
    interactionType: config.interactionType,
  }),
});

export const createFlexColor = (config: FlexColorFactoryInput): FlexColor => ({
  activated: createColorGamut({
    containedColor: config.containedColor,
    containedColorFactory: config.containedColorFactory,
    containedInvertedColor: config.containedInvertedColor,
    interactionType: InteractionType.Activated,
    uncontainedColor: config.uncontainedColor,
    uncontainedColorFactory: config.uncontainedColorFactory,
    uncontainedInvertedColor: config.uncontainedInvertedColor,
  }),
  disabled: {
    contained: config.containedColorDisabled,
    containedInverted: config.containedInvertedColorDisabled,
    uncontained: config.uncontainedColorDisabled,
    uncontainedInverted: config.uncontainedInvertedColorDisabled,
  },
  enabled: createColorGamut({
    containedColor: config.containedColor,
    containedColorFactory: config.containedColorFactory,
    containedInvertedColor: config.containedInvertedColor,
    interactionType: InteractionType.Enabled,
    uncontainedColor: config.uncontainedColor,
    uncontainedColorFactory: config.uncontainedColorFactory,
    uncontainedInvertedColor: config.uncontainedInvertedColor,
  }),
  focused: createColorGamut({
    containedColor: config.containedColor,
    containedColorFactory: config.containedColorFactory,
    containedInvertedColor: config.containedInvertedColor,
    interactionType: InteractionType.Focused,
    uncontainedColor: config.uncontainedColor,
    uncontainedColorFactory: config.uncontainedColorFactory,
    uncontainedInvertedColor: config.uncontainedInvertedColor,
  }),
  hovered: createColorGamut({
    containedColor: config.containedColor,
    containedColorFactory: config.containedColorFactory,
    containedInvertedColor: config.containedInvertedColor,
    interactionType: InteractionType.Hovered,
    uncontainedColor: config.uncontainedColor,
    uncontainedColorFactory: config.uncontainedColorFactory,
    uncontainedInvertedColor: config.uncontainedInvertedColor,
  }),
  pressed: createColorGamut({
    containedColor: config.containedColor,
    containedColorFactory: config.containedColorFactory,
    containedInvertedColor: config.containedInvertedColor,
    interactionType: InteractionType.Pressed,
    uncontainedColor: config.uncontainedColor,
    uncontainedColorFactory: config.uncontainedColorFactory,
    uncontainedInvertedColor: config.uncontainedInvertedColor,
  }),
});
