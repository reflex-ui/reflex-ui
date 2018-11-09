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
  allVariantsLargeButtonLeadingIconContainerProps,
  allVariantsLargeButtonTrailingIconContainerProps,
  allVariantsLargeButtonSideIconProps,
  allVariantsRegularButtonLeadingIconContainerProps,
  allVariantsRegularButtonTrailingIconContainerProps,
  allVariantsRegularButtonSideIconProps,
  allVariantsSmallButtonLeadingIconContainerProps,
  allVariantsSmallButtonTrailingIconContainerProps,
  allVariantsSmallButtonSideIconProps,
  allVariantsXLargeButtonLeadingIconContainerProps,
  allVariantsXLargeButtonTrailingIconContainerProps,
  allVariantsXLargeButtonSideIconProps,
  allVariantsXSmallButtonLeadingIconContainerProps,
  allVariantsXSmallButtonTrailingIconContainerProps,
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
            flexDirection: 'row',
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
      leadingIcon: {
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
      trailingIcon: {
        props: allVariantsCommonButtonIconProps,
      },
    },
    disabled: {
      container: {
        props: {
          style: {
            ...Platform.select({
              web: {
                cursor: 'default',
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
      leadingIcon: {
        props: allVariantsLargeButtonSideIconProps,
      },
      leadingIconContainer: {
        props: allVariantsLargeButtonLeadingIconContainerProps,
      },
      text: {
        props: {
          style: {
            fontSize: 15,
            letterSpacing: 1,
          },
        },
      },
      trailingIcon: {
        props: allVariantsLargeButtonSideIconProps,
      },
      trailingIconContainer: {
        props: allVariantsLargeButtonTrailingIconContainerProps,
      },
    },
  },
  medium: {
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
      leadingIcon: {
        props: allVariantsRegularButtonSideIconProps,
      },
      leadingIconContainer: {
        props: allVariantsRegularButtonLeadingIconContainerProps,
      },
      text: {
        props: {
          style: {
            fontSize: 14,
            letterSpacing: 0.75,
          },
        },
      },
      trailingIcon: {
        props: allVariantsRegularButtonSideIconProps,
      },
      trailingIconContainer: {
        props: allVariantsRegularButtonTrailingIconContainerProps,
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
      leadingIcon: {
        props: allVariantsSmallButtonSideIconProps,
      },
      leadingIconContainer: {
        props: allVariantsSmallButtonLeadingIconContainerProps,
      },
      text: {
        props: {
          style: {
            fontSize: 13,
            letterSpacing: 0.5,
          },
        },
      },
      trailingIcon: {
        props: allVariantsSmallButtonSideIconProps,
      },
      trailingIconContainer: {
        props: allVariantsSmallButtonTrailingIconContainerProps,
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
      leadingIcon: {
        props: allVariantsXLargeButtonSideIconProps,
      },
      leadingIconContainer: {
        props: allVariantsXLargeButtonLeadingIconContainerProps,
      },
      text: {
        props: {
          style: {
            fontSize: 16,
            letterSpacing: 1.25,
          },
        },
      },
      trailingIcon: {
        props: allVariantsXLargeButtonSideIconProps,
      },
      trailingIconContainer: {
        props: allVariantsXLargeButtonTrailingIconContainerProps,
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
      leadingIcon: {
        props: allVariantsXSmallButtonSideIconProps,
      },
      leadingIconContainer: {
        props: allVariantsXSmallButtonLeadingIconContainerProps,
      },
      text: {
        props: {
          style: {
            fontSize: 12,
            letterSpacing: 0.25,
          },
        },
      },
      trailingIcon: {
        props: allVariantsXSmallButtonSideIconProps,
      },
      trailingIconContainer: {
        props: allVariantsXSmallButtonTrailingIconContainerProps,
      },
    },
  },
};
