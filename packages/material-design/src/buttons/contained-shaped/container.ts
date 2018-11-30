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
export const containedShapedButtonContainerTheme: OptionalSizedSubTheme<
  OptionalInteractiveSubTheme<OptionalViewTheme<ButtonProps>>
> = {
  large: {
    allStates: {
      props: {
        style: {
          borderRadius: 20,
        },
      },
    },
  },
  medium: {
    allStates: {
      props: {
        style: {
          borderRadius: 18,
        },
      },
    },
  },
  small: {
    allStates: {
      props: {
        style: {
          borderRadius: 16,
        },
      },
    },
  },
  xlarge: {
    allStates: {
      props: {
        style: {
          borderRadius: 24,
        },
      },
    },
  },
  xsmall: {
    allStates: {
      props: {
        style: {
          borderRadius: 14,
        },
      },
    },
  },
};
