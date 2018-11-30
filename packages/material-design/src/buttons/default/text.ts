/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonProps,
  getThemedColor,
  InteractivityType,
  isWeb,
  OptionalInteractiveSubTheme,
  OptionalSizedSubTheme,
  OptionalTextTheme,
  TextPropsGetter,
  TextStyleGetter,
} from '@reflex-ui/core';

export const getDefaultButtonTextColorStyle: TextStyleGetter<ButtonProps> = ({
  colorTheme,
  interactivityState,
  paletteTheme,
}) => ({
  color: getThemedColor({
    colorTheme,
    interactivityType: interactivityState.type,
    onColor: interactivityState.type === InteractivityType.DISABLED,
    paletteTheme,
  }),
});

export const getDefaultButtonTextProps: TextPropsGetter<
  ButtonProps
> = props => ({
  style: getDefaultButtonTextStyle(props),
});

export const getDefaultButtonTextStyle: TextStyleGetter<ButtonProps> = (
  props: ButtonProps,
) => ({
  ...getDefaultButtonTextColorStyle(props),
});

export const defaultButtonTextTheme: OptionalSizedSubTheme<
  OptionalInteractiveSubTheme<OptionalTextTheme<ButtonProps>>
> = {
  allSizes: {
    allStates: {
      getProps: getDefaultButtonTextProps,
      props: {
        style: {
          marginTop: isWeb ? -3 : 0,
        },
      },
    },
  },
};
