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
import { LabelButtonCollection } from './LabelButtonCollection';

const getButtonPatchTheme: ComponentThemeGetter<ButtonProps, ButtonTheme> = ({
  interactionState: { type: interactionType },
}): ButtonTheme => {
  const isHoveredOrPressed =
    interactionType === InteractionType.Hovered ||
    interactionType === InteractionType.Pressed;

  const strokeWidth = isHoveredOrPressed ? 3 : 0;
  const stroke = isHoveredOrPressed ? 'red' : undefined;

  return {
    leadingIcon: () => ({
      getProps: () => ({ stroke, strokeWidth }),
    }),
    surface: () => ({
      getStyle: () => ({ borderRadius: 0 }),
    }),
    text: {
      getStyle: () => {
        if (interactionType === InteractionType.Disabled) return {};
        return {
          textDecorationLine: isHoveredOrPressed ? 'line-through' : 'underline',
        };
      },
    },
    trailingIcon: () => ({
      getProps: () => ({ stroke, strokeWidth }),
    }),
  };
};

const ScaleButton1: React.SFC<ButtonPropsOptional> = (props): JSX.Element => (
  <Button {...props}>OK</Button>
);

const ScaleButton2: React.SFC<ButtonPropsOptional> = (props): JSX.Element => (
  <Button leadingIcon={<FavoriteIcon />} {...props}>
    Favorite
  </Button>
);

const DefaultButtonShowcaseScreen: React.SFC = (): JSX.Element => (
  <ButtonShowcaseScreen
    ButtonCollection={LabelButtonCollection}
    customCollections={[
      {
        getPatchTheme: getButtonPatchTheme,
        invertColor: true,
        paletteColor: pink,
        title: 'custom',
        variant: ButtonVariant.Default,
      },
    ]}
    scaleButtons={[ScaleButton1, ScaleButton2]}
    title="Button: Default"
    variant={ButtonVariant.Default}
  />
);

DefaultButtonShowcaseScreen.displayName = 'DefaultButtonShowcaseScreen';

export { DefaultButtonShowcaseScreen };
