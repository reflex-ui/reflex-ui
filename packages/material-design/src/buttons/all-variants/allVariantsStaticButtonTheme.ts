import {
  FontWeight,
  getFontWeight,
  isWeb,
  OptionalButtonVariantTheme,
} from '@reflex-ui/core';
import { Platform } from 'react-native';
import { getFontFamily } from '../../typography';
// prettier-ignore
import {
  getAllVariantsCommonButtonContainerProps,
} from './AllVariantsButtonContainerProps';

import {
  allVariantsCommonButtonIconProps,
  allVariantsLargeButtonLeftIconContainerProps,
  allVariantsLargeButtonRightIconContainerProps,
  allVariantsLargeButtonSideIconProps,
  allVariantsRegularButtonLeftIconContainerProps,
  allVariantsRegularButtonRightIconContainerProps,
  allVariantsRegularButtonSideIconProps,
  allVariantsSmallButtonLeftIconContainerProps,
  allVariantsSmallButtonRightIconContainerProps,
  allVariantsSmallButtonSideIconProps,
  allVariantsXLargeButtonLeftIconContainerProps,
  allVariantsXLargeButtonRightIconContainerProps,
  allVariantsXLargeButtonSideIconProps,
  allVariantsXSmallButtonLeftIconContainerProps,
  allVariantsXSmallButtonRightIconContainerProps,
  allVariantsXSmallButtonSideIconProps,
} from './AllVariantsIconProps';

export const allVariantsStaticButtonTheme: OptionalButtonVariantTheme = {
  allSizes: {
    allStates: {
      container: {
        getProps: getAllVariantsCommonButtonContainerProps,
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
      icon: {
        props: allVariantsCommonButtonIconProps,
      },
      leftIcon: {
        props: allVariantsCommonButtonIconProps,
      },
      rightIcon: {
        props: allVariantsCommonButtonIconProps,
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
            borderRadius: 4,
          },
        },
      },
      icon: {
        props: {
          style: {
            fontSize: 30,
          },
        },
      },
      leftIcon: {
        props: allVariantsLargeButtonSideIconProps,
      },
      leftIconContainer: {
        props: allVariantsLargeButtonLeftIconContainerProps,
      },
      rightIcon: {
        props: allVariantsLargeButtonSideIconProps,
      },
      rightIconContainer: {
        props: allVariantsLargeButtonRightIconContainerProps,
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
            borderRadius: 4,
          },
        },
      },
      icon: {
        props: {
          style: {
            fontSize: 24,
          },
        },
      },
      leftIcon: {
        props: allVariantsRegularButtonSideIconProps,
      },
      leftIconContainer: {
        props: allVariantsRegularButtonLeftIconContainerProps,
      },
      rightIcon: {
        props: allVariantsRegularButtonSideIconProps,
      },
      rightIconContainer: {
        props: allVariantsRegularButtonRightIconContainerProps,
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
            borderRadius: 4,
          },
        },
      },
      icon: {
        props: {
          style: {
            fontSize: 20,
          },
        },
      },
      leftIcon: {
        props: allVariantsSmallButtonSideIconProps,
      },
      leftIconContainer: {
        props: allVariantsSmallButtonLeftIconContainerProps,
      },
      rightIcon: {
        props: allVariantsSmallButtonSideIconProps,
      },
      rightIconContainer: {
        props: allVariantsSmallButtonRightIconContainerProps,
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
            borderRadius: 6,
          },
        },
      },
      icon: {
        props: {
          style: {
            fontSize: 48,
          },
        },
      },
      leftIcon: {
        props: allVariantsXLargeButtonSideIconProps,
      },
      leftIconContainer: {
        props: allVariantsXLargeButtonLeftIconContainerProps,
      },
      rightIcon: {
        props: allVariantsXLargeButtonSideIconProps,
      },
      rightIconContainer: {
        props: allVariantsXLargeButtonRightIconContainerProps,
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
            borderRadius: 4,
          },
        },
      },
      icon: {
        props: {
          style: {
            fontSize: 18,
          },
        },
      },
      leftIcon: {
        props: allVariantsXSmallButtonSideIconProps,
      },
      leftIconContainer: {
        props: allVariantsXSmallButtonLeftIconContainerProps,
      },
      rightIcon: {
        props: allVariantsXSmallButtonSideIconProps,
      },
      rightIconContainer: {
        props: allVariantsXSmallButtonRightIconContainerProps,
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
