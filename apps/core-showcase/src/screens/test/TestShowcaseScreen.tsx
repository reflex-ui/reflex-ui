/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ColorTheme,
  ComponentThemeGetter,
  InteractionType,
  RfxSvgProps,
  RfxSvgTheme,
  Size,
} from '@reflex-ui/core';
import { disabledGrey300_500 } from '@reflex-ui/core-md';
import { FavoriteIcon } from '@reflex-ui/icons-md';
import * as React from 'react';

export const getIconPatchTheme: ComponentThemeGetter<
  RfxSvgProps,
  RfxSvgTheme
> = ({ interactionState }): RfxSvgTheme => {
  // tslint:disable-next-line:no-console
  console.log('TestScreen().getIconPatchTheme()');
  const iconColor =
    interactionState && interactionState.type === InteractionType.Disabled
      ? disabledGrey300_500.normal.onColor
      : '#0000ff';

  const stroke =
    interactionState && interactionState.type === InteractionType.Disabled
      ? disabledGrey300_500.normal.onColor
      : '#00ff00';

  return {
    getProps: () => {
      // tslint:disable-next-line:no-console
      console.log('TestScreen().getIconPatchTheme().svg.getProps()');
      return {
        fill: iconColor,
        // height: 200,
        stroke,
        strokeWidth: 2,
        // width: 200,
      };
    },
  };
};

const TestShowcaseScreen: React.SFC<{}> = (): JSX.Element => (
  <FavoriteIcon size={Size.M} />
);

TestShowcaseScreen.displayName = 'TestShowcaseScreen';

export { TestShowcaseScreen };
