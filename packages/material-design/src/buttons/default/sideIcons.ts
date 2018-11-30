/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonProps,
  OptionalInteractiveSubTheme,
  OptionalSizedSubTheme,
  OptionalTextTheme,
  TextPropsGetter,
} from '@reflex-ui/core';

import { getDefaultButtonTextColorStyle } from './text';

export const getDefaultButtonIconProps: TextPropsGetter<
  ButtonProps
> = props => ({
  style: {
    ...getDefaultButtonTextColorStyle(props),
  },
});

// tslint:disable-next-line:max-line-length
export const defaultButtonLeadingIconTheme: OptionalSizedSubTheme<
  OptionalInteractiveSubTheme<OptionalTextTheme<ButtonProps>>
> = {
  allSizes: {
    allStates: {
      getProps: getDefaultButtonIconProps,
    },
  },
};

// tslint:disable-next-line:max-line-length
export const defaultButtonTrailingIconTheme: OptionalSizedSubTheme<
  OptionalInteractiveSubTheme<OptionalTextTheme<ButtonProps>>
> = {
  ...defaultButtonLeadingIconTheme,
};
