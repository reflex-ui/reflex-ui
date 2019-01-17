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
  Surface,
} from '@reflex-ui/core';
import {
  disabledGrey300_500,
  getInlayColorByInteractivity,
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
          props.interactivityState.type === InteractivityType.DISABLED
            ? disabledGrey300_500.normal.color
            : getInlayColorByInteractivity({
              color: '#c70ad0',
              type: props.interactivityState.type,
            }),
      },
    },
    text: {
      style: {
        color:
          props.interactivityState.type === InteractivityType.DISABLED
            ? disabledGrey300_500.normal.onColor
            : '#ffffff',
      },
    },
  };
  return {
    ...subProps,
    leadingIcon: subProps.text,
    trailingIcon: subProps.text,
  };
};

const XFabButtonShowcaseScreen: React.SFC = (): JSX.Element => (
  <ButtonShowcaseScreen
    ButtonCollection={LabelButtonCollection}
    title="Button: XFab"
    variant={ButtonVariant.XFAB}
  >
    <Row>
      <Surface>
        <LabelButtonCollection
          colorTheme={ColorTheme.SURFACE_NORMAL}
          getSubProps={getButtonProps}
          title="Custom color"
          variant={ButtonVariant.XFAB}
        />
      </Surface>
    </Row>
  </ButtonShowcaseScreen>
);

XFabButtonShowcaseScreen.displayName = 'XFabButtonShowcaseScreen';

export { XFabButtonShowcaseScreen };
