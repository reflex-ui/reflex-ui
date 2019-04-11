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
  getInlayColorByInteraction,
} from '@reflex-ui/core-md';
import { FavoriteIcon } from '@reflex-ui/icons-md';
import * as React from 'react';

import { ButtonShowcaseScreen } from './ButtonShowcaseScreen';
import { LabelButtonCollection } from './LabelButtonCollection';

const getButtonPatchTheme: ComponentThemeGetter<ButtonProps, ButtonTheme> = ({
  interactionState: { type: interactionType },
}): ButtonTheme => {
  const backgroundColor =
    interactionType === InteractionType.Disabled
      ? disabledGrey300Contained.color
      : // prettier-ignore
        getInlayColorByInteraction({
          color: '#c70ad0',
          type: interactionType,
        });

  const textColor =
    interactionType === InteractionType.Disabled
      ? disabledGrey300Contained.onColor
      : '#fff';

  return {
    leadingIcon: () => ({
      getProps: () => ({ fill: textColor }),
    }),
    surface: () => ({
      getStyle: () => ({ backgroundColor }),
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
  <Button {...props}>Create</Button>
);

const ScaleButton2: React.SFC<ButtonPropsOptional> = (props): JSX.Element => (
  <Button leadingIcon={<FavoriteIcon />} {...props}>
    Add to cart
  </Button>
);

const XFabButtonShowcaseScreen: React.SFC = (): JSX.Element => (
  <ButtonShowcaseScreen
    ButtonCollection={LabelButtonCollection}
    customCollections={[
      {
        getPatchTheme: getButtonPatchTheme,
        title: 'custom',
        variant: ButtonVariant.XFab,
      },
    ]}
    scaleButtons={[ScaleButton1, ScaleButton2]}
    title="Button: XFab"
    variant={ButtonVariant.XFab}
  />
);

XFabButtonShowcaseScreen.displayName = 'XFabButtonShowcaseScreen';

export { XFabButtonShowcaseScreen };
