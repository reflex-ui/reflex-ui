import {
  getThemedColor,
  IconTheme,
  IconWrapperProps,
  OptionalIconTheme,
  rawIconTheme,
  TextPropsGetter,
  TextStyleGetter,
} from '@reflex-ui/core';
import merge from 'lodash/merge';
import { Platform, TextStyle } from 'react-native';

export const getAllSizesIconProps: TextPropsGetter<
  IconWrapperProps
> = props => ({
  style: getAllSizesIconStyle(props),
});

export const getAllSizesIconStyle: TextStyleGetter<IconWrapperProps> = ({
  colorTheme,
  theme: { palette },
}) => ({
  color: getThemedColor({ colorTheme, palette }),
});

const optionalIconTheme: OptionalIconTheme = {
  allSizes: {
    icon: {
      getProps: getAllSizesIconProps,
      props: {
        style: {
          ...Platform.select<TextStyle>({
            web: {
              userSelect: 'none',
            },
          }),
        },
      },
    },
  },
  large: {
    container: {
      props: {
        style: {
          marginHorizontal: 8,
          marginVertical: 2,
        },
      },
    },
    icon: {
      props: {
        style: {
          fontSize: 32,
        },
      },
    },
  },
  regular: {
    container: {
      props: {
        style: {
          marginHorizontal: 4,
          marginVertical: 2,
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
  },
  small: {
    container: {
      props: {
        style: {
          marginHorizontal: 2,
        },
      },
    },
    icon: {
      props: {
        style: {
          fontSize: 16,
        },
      },
    },
  },
  xlarge: {
    container: {
      props: {
        style: {
          marginHorizontal: 12,
          marginVertical: 4,
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
  },
  xsmall: {
    container: {
      props: {
        style: {
          marginHorizontal: 1,
        },
      },
    },
    icon: {
      props: {
        style: {
          fontSize: 12,
        },
      },
    },
  },
};

export const iconTheme: IconTheme = merge<{}, IconTheme, OptionalIconTheme>(
  {},
  rawIconTheme,
  optionalIconTheme,
);
