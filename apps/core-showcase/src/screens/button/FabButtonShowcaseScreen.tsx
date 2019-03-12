/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Button,
  ButtonChildrenProps,
  ButtonChildrenPropsGetter,
  ButtonPropsOptional,
  ButtonVariant,
  ColorTheme,
  InteractionType,
} from '@reflex-ui/core';
import {
  disabledGrey300_500,
  getInlayColorByInteraction,
} from '@reflex-ui/core-md';
import { FavoriteIcon } from '@reflex-ui/icons-md';
import * as React from 'react';

import { ButtonShowcaseScreen } from './ButtonShowcaseScreen';
import { IconButtonCollection } from './IconButtonCollection';

const getButtonProps: ButtonChildrenPropsGetter = ({
  interactionState: { type: interactionType },
}): ButtonChildrenProps => {
  const backgroundColor =
    interactionType === InteractionType.Disabled
      ? disabledGrey300_500.normal.color
      : // prettier-ignore
        getInlayColorByInteraction({
          color: '#c70ad0',
          type: interactionType,
        });

  const iconColor =
    interactionType === InteractionType.Disabled
      ? disabledGrey300_500.normal.onColor
      : '#fff';

  return {
    container: {
      style: { backgroundColor },
    },
    icon: { fill: iconColor },
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
        colorTheme: ColorTheme.PrimaryNormal,
        getChildrenProps: getButtonProps,
        surfaceColorTheme: ColorTheme.SurfaceNormal,
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
