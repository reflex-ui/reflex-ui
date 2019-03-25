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
  Column,
  ComponentThemeGetter,
  InteractionType,
  RfxSvgProps,
  RfxSvgTheme,
  Size,
} from '@reflex-ui/core';
import {
  disabledGrey300_500,
  getInlayColorByInteraction,
  getOverlayColorByInteraction,
} from '@reflex-ui/core-md';
import { FavoriteIcon } from '@reflex-ui/icons-md';
import * as React from 'react';

const onButtonPress = () => {
  // tslint:disable-next-line:no-console
  console.log('IconShowcaseScreen().onButtonPress()');
};

const getContainedButtonPatchTheme: ComponentThemeGetter<
  ButtonProps,
  ButtonTheme
> = ({ interactionState: { type: interactionType } }): ButtonTheme => {
  const backgroundColor =
    interactionType === InteractionType.Disabled
      ? disabledGrey300_500.normal.color
      : // prettier-ignore
        getInlayColorByInteraction({
          color: '#c70ad0',
          type: interactionType,
        });

  const textColor =
    interactionType === InteractionType.Disabled
      ? disabledGrey300_500.normal.onColor
      : '#fff';

  return {
    container: {
      getStyle: () => ({ backgroundColor }),
    },
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
    text: {
      getStyle: () => ({ color: textColor }),
    },
  };
};

const getIconButtonPatchTheme: ComponentThemeGetter<
  ButtonProps,
  ButtonTheme
> = ({ interactionState: { type: interactionType } }): ButtonTheme => {
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
        borderRadius: 100,
        height: 200,
        width: 200,
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
        svg: {
          getProps: () => {
            console.log(
              'TestScreen().getButtonPatchTheme().getIcon().svg.getProps()',
            );
            return {
              fill: iconColor,
              height: 150,
              stroke,
              strokeWidth: 2,
              width: 150,
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
  <Column>
    <Button
      getPatchTheme={getIconButtonPatchTheme}
      onPress={onButtonPress}
      variant={ButtonVariant.Icon}
    >
      <FavoriteIcon getPatchTheme={getIconPatchTheme} size={Size.L} />
    </Button>
    <Button
      getPatchTheme={getContainedButtonPatchTheme}
      leadingIcon={<FavoriteIcon />}
      marginHorizontal={Size.M}
      marginVertical={Size.XXL}
      onPress={onButtonPress}
      trailingIcon={<FavoriteIcon />}
      variant={ButtonVariant.Contained}
    >
      Favorite
    </Button>
  </Column>
);

TestShowcaseScreen.displayName = 'TestShowcaseScreen';

export { TestShowcaseScreen };
