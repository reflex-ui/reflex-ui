import {
  ButtonProps,
  OptionalInteractiveSubTheme,
  OptionalSizedSubTheme,
  OptionalViewTheme,
} from '@reflex-ui/core';

export const iconStaticButtonContainerTheme: OptionalSizedSubTheme<
  OptionalInteractiveSubTheme<OptionalViewTheme<ButtonProps>>
> = {
  large: {
    allStates: {
      props: {
        style: {
          borderRadius: 28,
          height: 56,
          minWidth: 56,
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
          minWidth: 48,
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
          minWidth: 40,
        },
      },
    },
  },
  xlarge: {
    allStates: {
      props: {
        style: {
          borderRadius: 40,
          height: 80,
          minWidth: 80,
        },
      },
    },
  },
  xsmall: {
    allStates: {
      props: {
        style: {
          borderRadius: 16,
          height: 32,
          minWidth: 32,
        },
      },
    },
  },
};
