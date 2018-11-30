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
import { Platform, TextStyle } from 'react-native';

export const allVariantsButtonIconTheme: OptionalSizedSubTheme<
  OptionalInteractiveSubTheme<OptionalTextTheme<ButtonProps>>
> = {
  allSizes: {
    allStates: {
      props: {
        style: {
          ...Platform.select<TextStyle>({
            web: {
              userSelect: 'none',
            },
          }),
        },
      },
    },
  },
  large: {
    allStates: {
      props: {
        style: {
          fontSize: 30,
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
          fontSize: 20,
        },
      },
    },
  },
  xlarge: {
    allStates: {
      props: {
        style: {
          fontSize: 48,
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
