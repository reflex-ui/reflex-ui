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
  allVariantsLargeButtonIconProps,
  allVariantsLargeButtonLeftIconContainerProps,
  allVariantsLargeButtonRightIconContainerProps,
  allVariantsRegularButtonIconProps,
  allVariantsRegularButtonLeftIconContainerProps,
  allVariantsRegularButtonRightIconContainerProps,
  allVariantsSmallButtonIconProps,
  allVariantsSmallButtonLeftIconContainerProps,
  allVariantsSmallButtonRightIconContainerProps,
  allVariantsXLargeButtonIconProps,
  allVariantsXLargeButtonLeftIconContainerProps,
  allVariantsXLargeButtonRightIconContainerProps,
  allVariantsXSmallButtonIconProps,
  allVariantsXSmallButtonLeftIconContainerProps,
  allVariantsXSmallButtonRightIconContainerProps,
} from './AllVariantsIconProps';

export const allVariantsButtonTheme: OptionalButtonVariantTheme = {
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
      leftIcon: {
        props: allVariantsLargeButtonIconProps,
      },
      leftIconContainer: {
        props: allVariantsLargeButtonLeftIconContainerProps,
      },
      rightIcon: {
        props: allVariantsLargeButtonIconProps,
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
      leftIcon: {
        props: allVariantsRegularButtonIconProps,
      },
      leftIconContainer: {
        props: allVariantsRegularButtonLeftIconContainerProps,
      },
      rightIcon: {
        props: allVariantsRegularButtonIconProps,
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
      leftIcon: {
        props: allVariantsSmallButtonIconProps,
      },
      leftIconContainer: {
        props: allVariantsSmallButtonLeftIconContainerProps,
      },
      rightIcon: {
        props: allVariantsSmallButtonIconProps,
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
      leftIcon: {
        props: allVariantsXLargeButtonIconProps,
      },
      leftIconContainer: {
        props: allVariantsXLargeButtonLeftIconContainerProps,
      },
      rightIcon: {
        props: allVariantsXLargeButtonIconProps,
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
      leftIcon: {
        props: allVariantsXSmallButtonIconProps,
      },
      leftIconContainer: {
        props: allVariantsXSmallButtonLeftIconContainerProps,
      },
      rightIcon: {
        props: allVariantsXSmallButtonIconProps,
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
