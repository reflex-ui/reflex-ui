/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonProps,
  getThemedColor,
  OptionalInteractiveSubTheme,
  OptionalSizedSubTheme,
  OptionalTextTheme,
  TextPropsGetter,
  TextStyleGetter,
} from '@reflex-ui/core';

export const getContainedButtonTextColorStyle: TextStyleGetter<ButtonProps> = ({
  colorTheme,
  interactivityState,
  paletteTheme,
}) => ({
  color: getThemedColor({
    colorTheme,
    interactivityType: interactivityState.type,
    onColor: true,
    paletteTheme,
  }),
});

export const getContainedButtonTextProps: TextPropsGetter<ButtonProps> = (
  props: ButtonProps,
) => ({
  style: getContainedButtonTextStyle(props),
});

export const getContainedButtonTextStyle: TextStyleGetter<ButtonProps> = (
  props: ButtonProps,
) => ({
  ...getContainedButtonTextColorStyle(props),
});

export const containedButtonTextTheme: OptionalSizedSubTheme<
  OptionalInteractiveSubTheme<OptionalTextTheme<ButtonProps>>
> = {
  allSizes: {
    allStates: {
      getProps: getContainedButtonTextProps,
    },
  },
};
