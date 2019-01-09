/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { InteractivityType } from '../interactivity/InteractivityType';
import { ColorTheme } from './ColorTheme';
import { InteractivityPaletteColor } from './InteractivityPaletteColor';
import { PaletteColor } from './PaletteColor';
import { PaletteColorVariant } from './PaletteColorVariant';
import { ThemedColorGetter } from './ThemedColorGetter';

export const getThemedColor: ThemedColorGetter = ({
  colorTheme = ColorTheme.PRIMARY_NORMAL,
  interactivityType = InteractivityType.ENABLED,
  onColor,
  paletteTheme,
}): string => {
  // tslint:disable-next-line:no-console
  // console.log('getThemedColor() - colorTheme: ', colorTheme);

  // tslint:disable-next-line:no-console
  // console.log('getThemedColor() - paletteTheme: ', paletteTheme);

  const colorThemeNames = colorTheme.split('_');

  // tslint:disable-next-line:no-console
  // console.log('getThemedColor() - colorThemeNames: ', colorThemeNames);

  const interactivityColorTarget: InteractivityPaletteColor =
    // @ts-ignore Element implicitly has an 'any' type because
    // type 'PaletteTheme' has no index signature.ts(7017)
    paletteTheme[colorThemeNames[0]];

  // tslint:disable-next-line:no-console
  /* console.log(
    'getThemedColor() - interactivityColorTarget: ',
    interactivityColorTarget,
  );*/

  const colorTarget: PaletteColor =
    interactivityType === InteractivityType.DISABLED
      ? interactivityColorTarget.disabled
      : interactivityColorTarget.enabled;

  // tslint:disable-next-line:no-console
  // console.log('getThemedColor() - colorTarget: ', colorTarget);

  const variantName = colorThemeNames[1];

  const colorVariant: PaletteColorVariant =
    // @ts-ignore Element implicitly has an 'any' type because
    // type 'InteractivityPaletteColor' has no index signature.ts(7017)
    colorTarget[variantName];

  const isInverted =
    interactivityType !== InteractivityType.DISABLED &&
    colorThemeNames.length > 2 &&
    colorThemeNames[2] === 'inverted';

  const isOnColor = (onColor && !isInverted) || (isInverted && !onColor);

  return isOnColor ? colorVariant.onColor : colorVariant.color;
};
