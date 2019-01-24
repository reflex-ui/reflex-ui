/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { InteractionType } from '../interaction/InteractionType';
import { ColorTheme } from './ColorTheme';
import { PaletteColor } from './PaletteColor';
import { PaletteColorArrangement } from './PaletteColorArrangement';
import { PaletteColorContainment } from './PaletteColorContainment';
import { PaletteColorInteraction } from './PaletteColorInteraction';
import { PaletteColorVariant } from './PaletteColorVariant';
import { ThemedColorGetter } from './ThemedColorGetter';

export const getThemedColor: ThemedColorGetter = ({
  colorTheme = ColorTheme.PrimaryNormal,
  contained = true,
  interactionState = { type: InteractionType.Enabled },
  invertColor = false,
  onColor = false,
  paletteTheme,
}): string => {
  // tslint:disable-next-line:no-console
  // console.log('getThemedColor() - colorTheme: ', colorTheme);

  // tslint:disable-next-line:no-console
  // console.log('getThemedColor() - paletteTheme: ', paletteTheme);

  const colorThemeNames = colorTheme.split('_');

  // tslint:disable-next-line:no-console
  // console.log('getThemedColor() - colorThemeNames: ', colorThemeNames);

  const colorTargetArrangement: PaletteColorArrangement =
    // @ts-ignore Element implicitly has an 'any' type because
    // type 'PaletteTheme' has no index signature.ts(7017)
    paletteTheme[colorThemeNames[0]];

  const colorTargetContainment: PaletteColorContainment = invertColor
    ? colorTargetArrangement.inverted
    : colorTargetArrangement.regular;

  const colorTargetInteraction: PaletteColorInteraction = contained
    ? colorTargetContainment.contained
    : colorTargetContainment.uncontained;

  // tslint:disable-next-line:no-console
  /* console.log(
    'getThemedColor() - interactionColorTarget: ',
    interactionColorTarget,
  );*/

  const colorTarget: PaletteColor =
    colorTargetInteraction[interactionState.type];

  // tslint:disable-next-line:no-console
  // console.log('getThemedColor() - colorTarget: ', colorTarget);

  const variantName = colorThemeNames[1];

  const colorVariant: PaletteColorVariant =
    // @ts-ignore Element implicitly has an 'any' type because
    // type 'PaletteColorInteraction' has no index signature.ts(7017)
    colorTarget[variantName];

  return onColor ? colorVariant.onColor : colorVariant.color;
};
