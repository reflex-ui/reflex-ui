import {
  ButtonProps,
  OptionalInteractiveSubTheme,
  OptionalSizedSubcomponentTheme,
  OptionalViewTheme,
} from '@reflex-ui/core';

// tslint:disable-next-line:max-line-length
export const xfabStaticButtonLeadingIconContainerTheme: OptionalSizedSubcomponentTheme<
  OptionalInteractiveSubTheme<OptionalViewTheme<ButtonProps>>
> = {
  large: {
    allStates: {
      props: {
        style: {
          marginEnd: 14,
        },
      },
    },
  },
  medium: {
    allStates: {
      props: {
        style: {
          marginEnd: 12,
        },
      },
    },
  },
  small: {
    allStates: {
      props: {
        style: {
          marginEnd: 10,
        },
      },
    },
  },
  xlarge: {
    allStates: {
      props: {
        style: {
          marginEnd: 18,
        },
      },
    },
  },
  xsmall: {
    allStates: {
      props: {
        style: {
          marginEnd: 8,
        },
      },
    },
  },
};

// tslint:disable-next-line:max-line-length
export const xfabStaticButtonTrailingIconContainerTheme: OptionalSizedSubcomponentTheme<
  OptionalInteractiveSubTheme<OptionalViewTheme<ButtonProps>>
> = {
  large: {
    allStates: {
      props: {
        style: {
          marginStart: 14,
        },
      },
    },
  },
  medium: {
    allStates: {
      props: {
        style: {
          marginStart: 12,
        },
      },
    },
  },
  small: {
    allStates: {
      props: {
        style: {
          marginStart: 10,
        },
      },
    },
  },
  xlarge: {
    allStates: {
      props: {
        style: {
          marginStart: 18,
        },
      },
    },
  },
  xsmall: {
    allStates: {
      props: {
        style: {
          marginStart: 8,
        },
      },
    },
  },
};
