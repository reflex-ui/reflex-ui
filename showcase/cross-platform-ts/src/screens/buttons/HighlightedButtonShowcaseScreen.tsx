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
  getInlayColorByInteraction,
} from '@reflex-ui/material-design';
import * as React from 'react';

import { ButtonShowcaseScreen } from './ButtonShowcaseScreen';
import { LabelButtonCollection } from './LabelButtonCollection';

const getButtonProps: ButtonSubPropsGetter = (
  props: ButtonProps,
): ButtonSubProps => {
  const subProps: ButtonSubProps = {
    container: {
      style: {
        backgroundColor:
          // prettier-ignore
          props.interactionState.type === InteractionType.Disabled
            ? disabledGrey300_500.normal.color
            : getInlayColorByInteraction({
              color: '#c70ad0',
              type: props.interactionState.type,
            }),
      },
    },
    text: {
      style: {
        color:
          props.interactionState.type === InteractionType.Disabled
            ? disabledGrey300_500.normal.onColor
            : '#fff',
      },
    },
  };

  return {
    ...subProps,
    leadingIcon: subProps.text,
    trailingIcon: subProps.text,
  };
};

const ScaleButton1: React.SFC<OptionalButtonProps> = (props): JSX.Element => (
  <Button {...props}>OK</Button>
);

const ScaleButton2: React.SFC<OptionalButtonProps> = (props): JSX.Element => (
  <Button leadingIcon={<FavoriteIcon />} {...props}>
    Favorite
  </Button>
);

const HighlightedButtonShowcaseScreen: React.SFC = (): JSX.Element => (
  <ButtonShowcaseScreen
    ButtonCollection={LabelButtonCollection}
    customCollections={[
      {
        colorTheme: ColorTheme.PrimaryNormal,
        getSubProps: getButtonProps,
        surfaceColorTheme: ColorTheme.SurfaceNormal,
        title: 'Custom color',
        variant: ButtonVariant.Highlighted,
      },
    ]}
    scaleButtons={[ScaleButton1, ScaleButton2]}
    title="Button: Highlighted"
    variant={ButtonVariant.Highlighted}
  />
);

HighlightedButtonShowcaseScreen.displayName = 'HighlightedButtonShowcaseScreen';

export { HighlightedButtonShowcaseScreen };
