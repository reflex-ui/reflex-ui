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

import { getContainedButtonTextColorStyle } from './text';

export const getContainedButtonIconProps: TextPropsGetter<
  ButtonProps
> = props => ({
  style: {
    ...getContainedButtonTextColorStyle(props),
  },
});

// tslint:disable-next-line:max-line-length
export const containedButtonLeadingIconTheme: OptionalSizedSubTheme<
  OptionalInteractiveSubTheme<OptionalTextTheme<ButtonProps>>
> = {
  allSizes: {
    allStates: {
      getProps: getContainedButtonIconProps,
    },
  },
};

// tslint:disable-next-line:max-line-length
export const containedButtonTrailingIconTheme: OptionalSizedSubTheme<
  OptionalInteractiveSubTheme<OptionalTextTheme<ButtonProps>>
> = {
  ...containedButtonLeadingIconTheme,
};
