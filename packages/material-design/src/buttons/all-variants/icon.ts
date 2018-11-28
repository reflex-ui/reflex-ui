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
