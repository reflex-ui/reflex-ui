import {
  ButtonProps,
  FontWeight,
  getFontWeight,
  isWeb,
  OptionalInteractivityStateTheme,
  OptionalSizedSubcomponentTheme,
  OptionalTextTheme,
} from '@reflex-ui/core';
import { Platform } from 'react-native';

import { getFontFamily } from '../../typography';

export const allVariantsStaticButtonTextTheme: OptionalSizedSubcomponentTheme<
  OptionalInteractivityStateTheme<OptionalTextTheme<ButtonProps>>
> = {
  allSizes: {
    allStates: {
      props: {
        style: {
          fontFamily: getFontFamily(),
          fontWeight: getFontWeight(FontWeight.MEDIUM),
          position: 'relative',
          textTransform: 'uppercase',
          ...Platform.select({
            web: {
              MozOsxFontSmoothing: 'grayscale',
              WebkitFontSmoothing: 'antialiased',
              marginTop: isWeb ? -2 : 0,
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
          fontSize: 15,
          letterSpacing: 1,
        },
      },
    },
  },
  medium: {
    allStates: {
      props: {
        style: {
          fontSize: 14,
          letterSpacing: 0.75,
        },
      },
    },
  },
  small: {
    allStates: {
      props: {
        style: {
          fontSize: 13,
          letterSpacing: 0.5,
        },
      },
    },
  },
  xlarge: {
    allStates: {
      props: {
        style: {
          fontSize: 16,
          letterSpacing: 1.25,
        },
      },
    },
  },
  xsmall: {
    allStates: {
      props: {
        style: {
          fontSize: 12,
          letterSpacing: 0.25,
        },
      },
    },
  },
};
