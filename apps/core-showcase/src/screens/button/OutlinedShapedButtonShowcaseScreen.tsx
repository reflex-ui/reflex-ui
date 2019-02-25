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
  ButtonSubProps,
  ButtonSubPropsGetter,
  ButtonVariant,
  ColorTheme,
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

const getButtonProps: ButtonSubPropsGetter = (
  props: ButtonProps,
): ButtonSubProps => {
  const subProps: ButtonSubProps = {
    container: {
      style: {
        backgroundColor: getOverlayColorByInteraction({
          color: '#c70ad0',
          type: props.interactionState.type,
        }),
        borderColor:
          props.interactionState.type === InteractionType.Disabled
            ? disabledGrey300_500.normal.onColor
            : '#c70ad0',
      },
    },
    text: {
      style: {
        color:
          props.interactionState.type === InteractionType.Disabled
            ? disabledGrey300_500.normal.onColor
            : '#c70ad0',
      },
    },
  };

  return {
    ...subProps,
    leadingIcon: subProps.text,
    trailingIcon: subProps.text,
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
        getSubProps: getButtonProps,
        surfaceColorTheme: ColorTheme.SurfaceNormal,
        title: 'Custom color',
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
