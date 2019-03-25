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
  ColorTheme,
  ComponentThemeGetter,
  InteractionType,
} from '@reflex-ui/core';
import {
  disabledGrey300_500,
  getOverlayColorByInteraction,
} from '@reflex-ui/core-md';
import { FavoriteIcon } from '@reflex-ui/icons-md';
import * as React from 'react';

import { ButtonShowcaseScreen } from './ButtonShowcaseScreen';
import { IconButtonCollection } from './IconButtonCollection';

const getButtonPatchTheme: ComponentThemeGetter<ButtonProps, ButtonTheme> = ({
  interactionState: { type: interactionType },
}): ButtonTheme => {
  const backgroundColor = getOverlayColorByInteraction({
    color: '#c70ad0',
    type: interactionType,
  });

  const iconColor =
    interactionType === InteractionType.Disabled
      ? disabledGrey300_500.normal.onColor
      : '#c70ad0';

  const stroke =
    interactionType === InteractionType.Disabled
      ? disabledGrey300_500.normal.onColor
      : '#ff0000';

  return {
    container: {
      getStyle: () => ({
        backgroundColor,
        borderRadius: 70,
        height: 140,
        width: 140,
      }),
    },
    getIcon: () => ({
      svg: {
        getProps: () => ({
          fill: iconColor,
          height: 100,
          stroke,
          strokeWidth: 2,
          width: 100,
        }),
      },
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
        colorTheme: ColorTheme.PrimaryNormal,
        getPatchTheme: getButtonPatchTheme,
        surfaceColorTheme: ColorTheme.SurfaceNormal,
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
