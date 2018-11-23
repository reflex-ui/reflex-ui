import {
  ButtonProps,
  OptionalInteractiveSubTheme,
  OptionalSizedSubTheme,
  OptionalTextTheme,
} from '@reflex-ui/core';

export const xfabStaticButtonLeadingIconTheme: OptionalSizedSubTheme<
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

export const xfabStaticButtonTrailingIconTheme: OptionalSizedSubTheme<
  OptionalInteractiveSubTheme<OptionalTextTheme<ButtonProps>>
> = {
  ...xfabStaticButtonLeadingIconTheme,
};
