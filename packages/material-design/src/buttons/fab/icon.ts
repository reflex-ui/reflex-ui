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

import { getContainedButtonTextColorStyle } from '../contained/text';

export const getFabButtonIconProps: TextPropsGetter<ButtonProps> = props => ({
  style: {
    ...getContainedButtonTextColorStyle(props),
  },
});

export const fabButtonIconTheme: OptionalSizedSubTheme<
  OptionalInteractiveSubTheme<OptionalTextTheme<ButtonProps>>
> = {
  allSizes: {
    allStates: {
      getProps: getFabButtonIconProps,
    },
  },
  small: {
    allStates: {
      props: {
        style: {
          fontSize: 24,
        },
      },
    },
  },
};
