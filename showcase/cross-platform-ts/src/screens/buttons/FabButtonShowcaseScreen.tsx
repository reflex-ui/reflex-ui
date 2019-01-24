/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonProps,
  ButtonSubProps,
  ButtonSubPropsGetter,
  ButtonVariant,
  ColorTheme,
  InteractionType,
} from '@reflex-ui/core';
import {
  disabledGrey300_500,
  getInlayColorByInteraction,
} from '@reflex-ui/material-design';
import * as React from 'react';

import { ButtonShowcaseScreen } from './ButtonShowcaseScreen';
import { IconButtonCollection } from './IconButtonCollection';

const getButtonProps: ButtonSubPropsGetter = (
  props: ButtonProps,
): ButtonSubProps => ({
  container: {
    style: {
      backgroundColor:
        // prettier-ignore
        props.interactionState.type === InteractionType.DISABLED
          ? disabledGrey300_500.normal.color
          : getInlayColorByInteraction({
            color: '#c70ad0',
            type: props.interactionState.type,
          }),
    },
  },
  icon: {
    style: {
      color:
        props.interactionState.type === InteractionType.DISABLED
          ? disabledGrey300_500.normal.onColor
          : '#fff',
    },
  },
});

const FabButtonShowcaseScreen: React.SFC = (): JSX.Element => (
  <ButtonShowcaseScreen
    ButtonCollection={IconButtonCollection}
    customCollections={[
      {
        colorTheme: ColorTheme.PRIMARY_NORMAL,
        getSubProps: getButtonProps,
        surfaceColorTheme: ColorTheme.SURFACE_NORMAL,
        title: 'Custom color',
        variant: ButtonVariant.FAB,
      },
    ]}
    title="Button: Fab"
    variant={ButtonVariant.FAB}
  />
);

FabButtonShowcaseScreen.displayName = 'FabButtonShowcaseScreen';

export { FabButtonShowcaseScreen };
