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
  InteractivityType,
  Row,
} from '@reflex-ui/core';
import {
  disabledPaletteColor,
  getOverlayColorByInteractivity,
} from '@reflex-ui/material-design';
import * as React from 'react';

import { ButtonShowcaseScreen } from './ButtonShowcaseScreen';
import { LabelButtonCollection } from './LabelButtonCollection';

const getDefaultButtonProps: ButtonSubPropsGetter = (
  props: ButtonProps,
): ButtonSubProps => {
  const subProps: ButtonSubProps = {
    container: {
      style: {
        backgroundColor: getOverlayColorByInteractivity({
          color: '#c70ad0',
          type: props.interactivityState.type,
        }),
      },
    },
    text: {
      style: {
        color:
          props.interactivityState.type === InteractivityType.DISABLED
            ? disabledPaletteColor.normal.onColor
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

const DefaultButtonShowcaseScreen: React.SFC = (): JSX.Element => (
  <ButtonShowcaseScreen
    ButtonCollection={LabelButtonCollection}
    title="Button: Default"
    variant={ButtonVariant.DEFAULT}
  >
    <Row>
      <LabelButtonCollection
        colorTheme={ColorTheme.SURFACE_NORMAL}
        getSubProps={getDefaultButtonProps}
        title="Custom color"
        variant={ButtonVariant.DEFAULT}
      />
    </Row>
  </ButtonShowcaseScreen>
);

DefaultButtonShowcaseScreen.displayName = 'DefaultButtonShowcaseScreen';

export { DefaultButtonShowcaseScreen };
