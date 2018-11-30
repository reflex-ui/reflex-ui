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
  OptionalViewTheme,
} from '@reflex-ui/core';

// tslint:disable-next-line:max-line-length
export const defaultButtonLeadingIconContainerTheme: OptionalSizedSubTheme<
  OptionalInteractiveSubTheme<OptionalViewTheme<ButtonProps>>
> = {
  allSizes: {
    allStates: {
      props: {
        style: {
          marginStart: 0,
        },
      },
    },
  },
};

// tslint:disable-next-line:max-line-length
export const defaultButtonTrailingIconContainerTheme: OptionalSizedSubTheme<
  OptionalInteractiveSubTheme<OptionalViewTheme<ButtonProps>>
> = {
  allSizes: {
    allStates: {
      props: {
        style: {
          marginEnd: 0,
        },
      },
    },
  },
};
