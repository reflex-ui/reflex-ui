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
  getOverlayColorByInteraction,
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
        backgroundColor: getOverlayColorByInteraction({
          color: '#c70ad0',
          type: props.interactionState.type,
        }),
        borderColor:
          props.interactionState.type === InteractionType.DISABLED
            ? disabledGrey300_500.normal.onColor
            : '#c70ad0',
      },
    },
    text: {
      style: {
        color:
          props.interactionState.type === InteractionType.DISABLED
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

const OutlinedButtonShowcaseScreen: React.SFC = (): JSX.Element => (
  <ButtonShowcaseScreen
    ButtonCollection={LabelButtonCollection}
    customCollections={[
      {
        colorTheme: ColorTheme.PRIMARY_NORMAL,
        getSubProps: getButtonProps,
        surfaceColorTheme: ColorTheme.SURFACE_NORMAL,
        title: 'Custom color',
        variant: ButtonVariant.OUTLINED,
      },
    ]}
    title="Button: Outlined"
    variant={ButtonVariant.OUTLINED}
  />
);

OutlinedButtonShowcaseScreen.displayName = 'OutlinedButtonShowcaseScreen';

export { OutlinedButtonShowcaseScreen };
