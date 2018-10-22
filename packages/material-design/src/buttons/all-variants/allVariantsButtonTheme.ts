import {
  FontWeight,
  getFontWeight,
  isWeb,
  OptionalButtonVariantTheme,
} from '@reflex-ui/core';
import { Platform } from 'react-native';
import { getFontFamily } from '../../typography';
import { getCommonButtonContainerProps } from '../CommonButtonContainerProps';

export const allVariantsButtonTheme: OptionalButtonVariantTheme = {
  allSizes: {
    allStates: {
      container: {
        getProps: getCommonButtonContainerProps,
        props: {
          pointerEvents: 'box-only',
          style: {
            alignItems: 'center',
            justifyContent: 'center',
            ...Platform.select({
              web: {
                cursor: 'pointer',
                outline: 'none',
              },
            }),
          },
        },
      },
      leftIcon: {
        props: {
          style: {
            ...Platform.select({
              web: {
                userSelect: 'none',
              },
            }),
          },
        },
      },
      text: {
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
    disabled: {
      container: {
        props: {
          style: {
            ...Platform.select({
              web: {
                cursor: 'not-allowed',
              },
            }),
          },
        },
      },
    },
  },
  large: {
    allStates: {
      container: {
        props: {
          style: {
            borderRadius: 2,
          },
        },
      },
      leftIcon: {
        props: {
          style: {
            fontSize: 19,
          },
        },
      },
      leftIconContainer: {
        props: {
          style: {
            marginLeft: -6,
            marginRight: 10,
          },
        },
      },
      text: {
        props: {
          style: {
            fontSize: 15,
            letterSpacing: 1,
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
            borderRadius: 2,
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
            marginLeft: -4,
            marginRight: 8,
          },
        },
      },
      text: {
        props: {
          style: {
            fontSize: 14,
            letterSpacing: 0.75,
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
            borderRadius: 2,
          },
        },
      },
      leftIcon: {
        props: {
          style: {
            fontSize: 17,
          },
        },
      },
      leftIconContainer: {
        props: {
          style: {
            marginLeft: -3,
            marginRight: 7,
          },
        },
      },
      text: {
        props: {
          style: {
            fontSize: 13,
            letterSpacing: 0.5,
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
            borderRadius: 4,
          },
        },
      },
      leftIcon: {
        props: {
          style: {
            fontSize: 20,
          },
        },
      },
      leftIconContainer: {
        props: {
          style: {
            marginLeft: -8,
            marginRight: 12,
          },
        },
      },
      text: {
        props: {
          style: {
            fontSize: 16,
            letterSpacing: 1.25,
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
            borderRadius: 2,
          },
        },
      },
      leftIcon: {
        props: {
          style: {
            fontSize: 15,
          },
        },
      },
      leftIconContainer: {
        props: {
          style: {
            marginLeft: -2,
            marginRight: 6,
          },
        },
      },
      text: {
        props: {
          style: {
            fontSize: 12,
            letterSpacing: 0.25,
          },
        },
      },
    },
  },
};
