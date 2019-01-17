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
): ButtonSubProps => ({
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
});

const HighlightedButtonShowcaseScreen: React.SFC = (): JSX.Element => (
  <ButtonShowcaseScreen
    ButtonCollection={LabelButtonCollection}
    title="Button: Highlighted"
    variant={ButtonVariant.HIGHLIGHTED}
  >
    <Row>
      <Surface>
        <LabelButtonCollection
          colorTheme={ColorTheme.SURFACE_NORMAL}
          getSubProps={getButtonProps}
          title="Custom color"
          variant={ButtonVariant.HIGHLIGHTED}
        />
      </Surface>
    </Row>
  </ButtonShowcaseScreen>
);

HighlightedButtonShowcaseScreen.displayName = 'HighlightedButtonShowcaseScreen';

export { HighlightedButtonShowcaseScreen };
