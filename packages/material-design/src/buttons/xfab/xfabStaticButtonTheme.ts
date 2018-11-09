import { OptionalButtonVariantTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { fabStaticButtonTheme } from '../fab/fabStaticButtonTheme';

const partialXFabStaticButtonTheme: OptionalButtonVariantTheme = {
  large: {
    allStates: {
      container: {
        props: {
          style: {
            borderRadius: 28,
            height: 56,
            minWidth: 56,
            paddingHorizontal: 24,
          },
        },
      },
      leadingIcon: {
        props: {
          style: {
            fontSize: 28,
          },
        },
      },
      leadingIconContainer: {
        props: {
          style: {
            marginEnd: 14,
          },
        },
      },
      trailingIcon: {
        props: {
          style: {
            fontSize: 28,
          },
        },
      },
      trailingIconContainer: {
        props: {
          style: {
            marginStart: 14,
          },
        },
      },
    },
  },
  medium: {
    allStates: {
      container: {
        props: {
          style: {
            borderRadius: 24,
            height: 48,
            minWidth: 56,
            paddingHorizontal: 20,
          },
        },
      },
      leadingIcon: {
        props: {
          style: {
            fontSize: 24,
          },
        },
      },
      leadingIconContainer: {
        props: {
          style: {
            marginEnd: 12,
          },
        },
      },
      trailingIcon: {
        props: {
          style: {
            fontSize: 24,
          },
        },
      },
      trailingIconContainer: {
        props: {
          style: {
            marginStart: 12,
          },
        },
      },
    },
  },
  small: {
    allStates: {
      container: {
        props: {
          style: {
            borderRadius: 20,
            height: 40,
            minWidth: 56,
            paddingHorizontal: 18,
          },
        },
      },
      leadingIcon: {
        props: {
          style: {
            fontSize: 22,
          },
        },
      },
      leadingIconContainer: {
        props: {
          style: {
            marginEnd: 10,
          },
        },
      },
      trailingIcon: {
        props: {
          style: {
            fontSize: 22,
          },
        },
      },
      trailingIconContainer: {
        props: {
          style: {
            marginStart: 10,
          },
        },
      },
    },
  },
  xlarge: {
    allStates: {
      container: {
        props: {
          style: {
            borderRadius: 36,
            height: 72,
            minWidth: 70,
            paddingHorizontal: 32,
          },
        },
      },
      leadingIcon: {
        props: {
          style: {
            fontSize: 32,
          },
        },
      },
      leadingIconContainer: {
        props: {
          style: {
            marginEnd: 18,
          },
        },
      },
      trailingIcon: {
        props: {
          style: {
            fontSize: 32,
          },
        },
      },
      trailingIconContainer: {
        props: {
          style: {
            marginStart: 18,
          },
        },
      },
    },
  },
  xsmall: {
    allStates: {
      container: {
        props: {
          style: {
            borderRadius: 15,
            height: 30,
            minWidth: 40,
            paddingHorizontal: 14,
          },
        },
      },
      leadingIcon: {
        props: {
          style: {
            fontSize: 18,
          },
        },
      },
      leadingIconContainer: {
        props: {
          style: {
            marginEnd: 8,
          },
        },
      },
      trailingIcon: {
        props: {
          style: {
            fontSize: 18,
          },
        },
      },
      trailingIconContainer: {
        props: {
          style: {
            marginStart: 8,
          },
        },
      },
    },
  },
};

export const xfabStaticButtonTheme: OptionalButtonVariantTheme = merge<
  {},
  OptionalButtonVariantTheme,
  OptionalButtonVariantTheme
>({}, fabStaticButtonTheme, partialXFabStaticButtonTheme);
