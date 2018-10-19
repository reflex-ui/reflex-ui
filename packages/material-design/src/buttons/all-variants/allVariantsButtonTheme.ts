import {
  FontWeight,
  getFontWeight,
  isWeb,
  OptionalButtonVariantTheme,
} from '@reflex-ui/core';
import { Platform } from 'react-native';
import { getFontFamily } from '../../typography';
import { getCommonButtonViewProps } from '../CommonButtonContainerProps';

export const allVariantsButtonTheme: OptionalButtonVariantTheme = {
  allSizes: {
    allStates: {
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
      view: {
        getProps: getCommonButtonViewProps,
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
    },
    disabled: {
      view: {
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
      view: {
        props: {
          style: {
            borderRadius: 2,
          },
        },
      },
    },
  },
  regular: {
    allStates: {
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
      view: {
        props: {
          style: {
            borderRadius: 2,
          },
        },
      },
    },
  },
  small: {
    allStates: {
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
      view: {
        props: {
          style: {
            borderRadius: 2,
          },
        },
      },
    },
  },
  xlarge: {
    allStates: {
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
      view: {
        props: {
          style: {
            borderRadius: 4,
          },
        },
      },
    },
  },
  xsmall: {
    allStates: {
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
      view: {
        props: {
          style: {
            borderRadius: 2,
          },
        },
      },
    },
  },
};
