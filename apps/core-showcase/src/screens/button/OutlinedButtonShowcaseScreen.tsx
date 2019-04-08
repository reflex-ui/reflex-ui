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
import {
  disabledGrey300Contained,
  getOverlayColorByInteraction,
} from '@reflex-ui/core-md';
import { FavoriteIcon } from '@reflex-ui/icons-md';
import * as React from 'react';

import { ButtonShowcaseScreen } from './ButtonShowcaseScreen';
import { LabelButtonCollection } from './LabelButtonCollection';

const getButtonPatchTheme: ComponentThemeGetter<ButtonProps, ButtonTheme> = ({
  interactionState: { type: interactionType },
}): ButtonTheme => {
  const backgroundColor = getOverlayColorByInteraction({
    color: '#c70ad0',
    type: interactionType,
  });

  const textColor =
    interactionType === InteractionType.Disabled
      ? disabledGrey300Contained.onColor
      : '#c70ad0';

  return {
    leadingIcon: () => ({
      getProps: () => ({ fill: textColor }),
    }),
    surface: () => ({
      getStyle: () => ({ backgroundColor, borderColor: textColor }),
    }),
    text: {
      getStyle: () => ({ color: textColor }),
    },
    trailingIcon: () => ({
      getProps: () => ({ fill: textColor }),
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

const OutlinedButtonShowcaseScreen: React.SFC = (): JSX.Element => (
  <ButtonShowcaseScreen
    ButtonCollection={LabelButtonCollection}
    customCollections={[
      {
        getPatchTheme: getButtonPatchTheme,
        title: 'custom',
        variant: ButtonVariant.Outlined,
      },
    ]}
    scaleButtons={[ScaleButton1, ScaleButton2]}
    title="Button: Outlined"
    variant={ButtonVariant.Outlined}
  />
);

OutlinedButtonShowcaseScreen.displayName = 'OutlinedButtonShowcaseScreen';

export { OutlinedButtonShowcaseScreen };
