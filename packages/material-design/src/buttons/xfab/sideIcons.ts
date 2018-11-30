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
} from '@reflex-ui/core';

export const xfabButtonLeadingIconTheme: OptionalSizedSubTheme<
  OptionalInteractiveSubTheme<OptionalTextTheme<ButtonProps>>
> = {
  large: {
    allStates: {
      props: {
        style: {
          fontSize: 28,
        },
      },
    },
  },
  medium: {
    allStates: {
      props: {
        style: {
          fontSize: 24,
        },
      },
    },
  },
  small: {
    allStates: {
      props: {
        style: {
          fontSize: 22,
        },
      },
    },
  },
  xlarge: {
    allStates: {
      props: {
        style: {
          fontSize: 32,
        },
      },
    },
  },
  xsmall: {
    allStates: {
      props: {
        style: {
          fontSize: 18,
        },
      },
    },
  },
};

export const xfabButtonTrailingIconTheme: OptionalSizedSubTheme<
  OptionalInteractiveSubTheme<OptionalTextTheme<ButtonProps>>
> = {
  ...xfabButtonLeadingIconTheme,
};
