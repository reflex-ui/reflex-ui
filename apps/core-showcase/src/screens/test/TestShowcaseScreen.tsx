/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Button,
  ButtonProps,
  ButtonTheme,
  ButtonVariant,
  ComponentThemeGetter,
  InteractionType,
  RfxSvgProps,
  RfxSvgTheme,
  Row,
  Size,
} from '@reflex-ui/core';
import {
  disabledGrey300_500,
  getOverlayColorByInteraction,
} from '@reflex-ui/core-md';
import { FavoriteIcon } from '@reflex-ui/icons-md';
import * as React from 'react';

const onButtonPress = () => {
  // tslint:disable-next-line:no-console
  console.log('IconShowcaseScreen().onButtonPress()');
};

const getButtonPatchTheme: ComponentThemeGetter<ButtonProps, ButtonTheme> = ({
  interactionState: { type: interactionType },
}): ButtonTheme => {
  console.log('TestScreen().getButtonPatchTheme()');
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
    /*
    getIcon: () => ({
      getProps: () => ({
        fill: iconColor,
        height: 100,
        stroke,
        strokeWidth: 2,
        width: 100,
      }),
    }),
    */
    getIcon: () => {
      console.log('TestScreen().getButtonPatchTheme().getIcon()');
      return {
        getProps: () => ({ height: 200, title: 'Some Title', width: 200 }),
        svg: {
          getProps: () => {
            console.log(
              'TestScreen().getButtonPatchTheme().getIcon().svg.getProps()',
            );
            return {
              fill: iconColor,
              height: 100,
              stroke,
              strokeWidth: 2,
              width: 100,
            };
          },
        },
      };
    },
  };
};

const getIconPatchTheme: ComponentThemeGetter<RfxSvgProps, RfxSvgTheme> = ({
  interactionState,
}): RfxSvgTheme => {
  console.log('TestScreen().getIconPatchTheme()');
  const iconColor =
    interactionState && interactionState.type === InteractionType.Disabled
      ? disabledGrey300_500.normal.onColor
      : '#0000ff';

  const stroke =
    interactionState && interactionState.type === InteractionType.Disabled
      ? disabledGrey300_500.normal.onColor
      : '#00ff00';

  return {
    /*
    getIcon: () => ({
      getProps: () => ({
        fill: iconColor,
        height: 100,
        stroke,
        strokeWidth: 2,
        width: 100,
      }),
    }),
    */
    svg: {
      getProps: () => {
        console.log('TestScreen().getIconPatchTheme().svg.getProps()');
        return {
          fill: iconColor,
          // height: 100,
          stroke,
          strokeWidth: 2,
          // width: 100,
        };
      },
    },
  };
};

const TestShowcaseScreen: React.SFC<{}> = (): JSX.Element => (
  <Row>
    <Button
      getPatchTheme={getButtonPatchTheme}
      onPress={onButtonPress}
      variant={ButtonVariant.Icon}
    >
      <FavoriteIcon getPatchTheme={getIconPatchTheme} size={Size.L} />
    </Button>
  </Row>
);

TestShowcaseScreen.displayName = 'TestShowcaseScreen';

export { TestShowcaseScreen };
