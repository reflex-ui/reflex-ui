import { OptionalButtonVariantTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { fabButtonTheme } from '../fab/fabButtonTheme';

const optionalXFabButtonTheme: OptionalButtonVariantTheme = {
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
      leftIcon: {
        props: {
          style: {
            fontSize: 28,
          },
        },
      },
      leftIconContainer: {
        props: {
          style: {
            marginRight: 14,
          },
        },
      },
      rightIcon: {
        props: {
          style: {
            fontSize: 28,
          },
        },
      },
      rightIconContainer: {
        props: {
          style: {
            marginLeft: 14,
          },
        },
      },
    },
  },
  regular: {
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
      leftIcon: {
        props: {
          style: {
            fontSize: 24,
          },
        },
      },
      leftIconContainer: {
        props: {
          style: {
            marginRight: 12,
          },
        },
      },
      rightIcon: {
        props: {
          style: {
            fontSize: 24,
          },
        },
      },
      rightIconContainer: {
        props: {
          style: {
            marginLeft: 12,
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
      leftIcon: {
        props: {
          style: {
            fontSize: 22,
          },
        },
      },
      leftIconContainer: {
        props: {
          style: {
            marginRight: 10,
          },
        },
      },
      rightIcon: {
        props: {
          style: {
            fontSize: 22,
          },
        },
      },
      rightIconContainer: {
        props: {
          style: {
            marginLeft: 10,
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
      leftIcon: {
        props: {
          style: {
            fontSize: 32,
          },
        },
      },
      leftIconContainer: {
        props: {
          style: {
            marginRight: 18,
          },
        },
      },
      rightIcon: {
        props: {
          style: {
            fontSize: 32,
          },
        },
      },
      rightIconContainer: {
        props: {
          style: {
            marginLeft: 18,
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
      leftIcon: {
        props: {
          style: {
            fontSize: 18,
          },
        },
      },
      leftIconContainer: {
        props: {
          style: {
            marginRight: 8,
          },
        },
      },
      rightIcon: {
        props: {
          style: {
            fontSize: 18,
          },
        },
      },
      rightIconContainer: {
        props: {
          style: {
            marginLeft: 8,
          },
        },
      },
    },
  },
};

export const xfabButtonTheme: OptionalButtonVariantTheme = merge<
  {},
  OptionalButtonVariantTheme,
  OptionalButtonVariantTheme
>({}, fabButtonTheme, optionalXFabButtonTheme);
