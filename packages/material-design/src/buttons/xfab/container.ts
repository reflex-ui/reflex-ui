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

export const xfabButtonContainerTheme: OptionalSizedSubTheme<
  OptionalInteractiveSubTheme<OptionalViewTheme<ButtonProps>>
> = {
  large: {
    allStates: {
      props: {
        style: {
          borderRadius: 28,
          height: 56,
          minWidth: 56,
          paddingHorizontal: 24,
        },
      },
    },
  },
  medium: {
    allStates: {
      props: {
        style: {
          borderRadius: 24,
          height: 48,
          minWidth: 56,
          paddingHorizontal: 20,
        },
      },
    },
  },
  small: {
    allStates: {
      props: {
        style: {
          borderRadius: 20,
          height: 40,
          minWidth: 56,
          paddingHorizontal: 18,
        },
      },
    },
  },
  xlarge: {
    allStates: {
      props: {
        style: {
          borderRadius: 36,
          height: 72,
          minWidth: 70,
          paddingHorizontal: 32,
        },
      },
    },
  },
  xsmall: {
    allStates: {
      props: {
        style: {
          borderRadius: 15,
          height: 30,
          minWidth: 40,
          paddingHorizontal: 14,
        },
      },
    },
  },
};
