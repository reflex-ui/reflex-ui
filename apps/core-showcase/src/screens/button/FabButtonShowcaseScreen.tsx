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
import { IconButtonCollection } from './IconButtonCollection';

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

  const iconColor =
    interactionType === InteractionType.Disabled
      ? disabledGrey300Contained.onColor
      : '#fff';

  return {
    icon: () => ({
      getProps: () => ({ fill: iconColor }),
    }),
    surface: () => ({
      getStyle: () => ({ backgroundColor }),
    }),
  };
};

const ScaleButton: React.SFC<ButtonPropsOptional> = (props): JSX.Element => (
  <Button {...props}>
    <FavoriteIcon />
  </Button>
);

const FabButtonShowcaseScreen: React.SFC = (): JSX.Element => (
  <ButtonShowcaseScreen
    ButtonCollection={IconButtonCollection}
    customCollections={[
      {
        getPatchTheme: getButtonPatchTheme,
        title: 'custom',
        variant: ButtonVariant.Fab,
      },
    ]}
    scaleButtons={[ScaleButton]}
    title="Button: Fab"
    variant={ButtonVariant.Fab}
  />
);

FabButtonShowcaseScreen.displayName = 'FabButtonShowcaseScreen';

export { FabButtonShowcaseScreen };
