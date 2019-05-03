/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Button,
  ButtonProps,
  ButtonPropsOptional,
  ButtonTheme,
  ButtonVariant,
  ComponentThemeGetter,
  InteractionType,
} from '@reflex-ui/core';
import { FavoriteIcon } from '@reflex-ui/icons-md';
import * as React from 'react';

import { pink } from '../../colors/pink';
import { ButtonShowcaseScreen } from './ButtonShowcaseScreen';
import { IconButtonCollection } from './IconButtonCollection';

const getButtonPatchTheme: ComponentThemeGetter<ButtonProps, ButtonTheme> = ({
  interactionState: { type: interactionType },
}): ButtonTheme => {
  const isHoveredOrPressed =
    interactionType === InteractionType.Hovered ||
    interactionType === InteractionType.Pressed;

  const strokeWidth = isHoveredOrPressed ? 3 : 0;
  const stroke = isHoveredOrPressed ? 'red' : undefined;

  return {
    icon: () => ({
      getProps: () => ({
        height: 100,
        stroke,
        strokeWidth,
        width: 100,
      }),
    }),
    surface: () => ({
      getStyle: () => ({
        borderRadius: 70,
        height: 140,
        width: 140,
      }),
    }),
  };
};

const ScaleButton: React.SFC<ButtonPropsOptional> = (props): JSX.Element => (
  <Button {...props}>
    <FavoriteIcon />
  </Button>
);

const IconButtonShowcaseScreen: React.SFC = (): JSX.Element => (
  <ButtonShowcaseScreen
    ButtonCollection={IconButtonCollection}
    customCollections={[
      {
        getPatchTheme: getButtonPatchTheme,
        invertColor: true,
        paletteColor: pink,
        title: 'custom',
        variant: ButtonVariant.Icon,
      },
    ]}
    scaleButtons={[ScaleButton]}
    title="Button: Icon"
    variant={ButtonVariant.Icon}
  />
);

IconButtonShowcaseScreen.displayName = 'IconButtonShowcaseScreen';

export { IconButtonShowcaseScreen };
