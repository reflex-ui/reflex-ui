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
      ? disabledGrey300_500.normal.onColor
      : '#c70ad0';

  return {
    getLeadingIcon: () => ({
      svg: {
        getProps: () => ({ fill: textColor }),
      },
    }),
    getTrailingIcon: () => ({
      svg: {
        getProps: () => ({ fill: textColor }),
      },
    }),
    surface: () => ({
      getStyle: () => ({ backgroundColor, borderColor: textColor }),
    }),
    text: {
      getStyle: () => ({ color: textColor }),
    },
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

const OutlinedShapedButtonShowcaseScreen: React.SFC = (): JSX.Element => (
  <ButtonShowcaseScreen
    ButtonCollection={LabelButtonCollection}
    customCollections={[
      {
        colorTheme: ColorTheme.PrimaryNormal,
        getPatchTheme: getButtonPatchTheme,
        surfaceColorTheme: ColorTheme.SurfaceNormal,
        title: 'custom',
        variant: ButtonVariant.OutlinedShaped,
      },
    ]}
    scaleButtons={[ScaleButton1, ScaleButton2]}
    title="Button: Outlined Shaped"
    variant={ButtonVariant.OutlinedShaped}
  />
);

OutlinedShapedButtonShowcaseScreen.displayName =
  'OutlinedShapedButtonShowcaseScreen';

export { OutlinedShapedButtonShowcaseScreen };
