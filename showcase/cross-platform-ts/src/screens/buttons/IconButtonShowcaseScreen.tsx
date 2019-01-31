/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Button,
  ButtonProps,
  ButtonSubProps,
  ButtonSubPropsGetter,
  ButtonVariant,
  ColorTheme,
  InteractionType,
  OptionalButtonProps,
} from '@reflex-ui/core';
import {
  disabledGrey300_500,
  FavoriteIcon,
  getOverlayColorByInteraction,
} from '@reflex-ui/material-design';
import * as React from 'react';

import { ButtonShowcaseScreen } from './ButtonShowcaseScreen';
import { IconButtonCollection } from './IconButtonCollection';

const getButtonProps: ButtonSubPropsGetter = (
  props: ButtonProps,
): ButtonSubProps => ({
  container: {
    style: {
      backgroundColor: getOverlayColorByInteraction({
        color: '#c70ad0',
        type: props.interactionState.type,
      }),
    },
  },
  icon: {
    style: {
      color:
        props.interactionState.type === InteractionType.Disabled
          ? disabledGrey300_500.normal.onColor
          : '#c70ad0',
    },
  },
});

const ScaleButton: React.SFC<OptionalButtonProps> = (props): JSX.Element => (
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
        getSubProps: getButtonProps,
        surfaceColorTheme: ColorTheme.SurfaceNormal,
        title: 'Custom color',
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
