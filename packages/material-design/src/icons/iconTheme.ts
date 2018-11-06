import {
  getSizedMarginStyle,
  getThemedColor,
  IconTheme,
  IconWrapperProps,
  OptionalIconTheme,
  rawIconTheme,
  Size,
  SizedMarginStyle,
  TextPropsGetter,
  TextStyleGetter,
  ViewPropsGetter,
  ViewStyleGetter,
} from '@reflex-ui/core';
import merge from 'lodash/merge';
import { Platform, TextStyle } from 'react-native';

export const iconSizedMarginStyle: SizedMarginStyle = {
  [Size.L]: {
    marginHorizontal: 12,
    marginVertical: 6,
  },
  [Size.M]: {
    marginHorizontal: 8,
    marginVertical: 4,
  },
  [Size.NONE]: {
    marginHorizontal: 0,
    marginVertical: 0,
  },
  [Size.S]: {
    marginHorizontal: 4,
    marginVertical: 2,
  },
  [Size.XL]: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  [Size.XS]: {
    marginHorizontal: 2,
    marginVertical: 1,
  },
};

export const getAllSizesIconProps: TextPropsGetter<
  IconWrapperProps
> = props => ({
  style: getAllSizesIconStyle(props),
});

export const getIconContainerProps: ViewPropsGetter<
  IconWrapperProps
> = props => ({
  style: getIconContainerStyle(props),
});

export const getIconContainerStyle: ViewStyleGetter<
  IconWrapperProps
> = props => ({
  ...getSizedMarginStyle(iconSizedMarginStyle)(props),
});

export const getAllSizesIconStyle: TextStyleGetter<IconWrapperProps> = ({
  colorTheme,
  theme: { palette },
}) => ({
  color: getThemedColor({ colorTheme, palette }),
});

const optionalIconTheme: OptionalIconTheme = {
  allSizes: {
    container: {
      getProps: getIconContainerProps,
    },
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
    icon: {
      props: {
        style: {
          fontSize: 32,
        },
      },
    },
  },
  medium: {
    icon: {
      props: {
        style: {
          fontSize: 24,
        },
      },
    },
  },
  small: {
    icon: {
      props: {
        style: {
          fontSize: 16,
        },
      },
    },
  },
  xlarge: {
    icon: {
      props: {
        style: {
          fontSize: 48,
        },
      },
    },
  },
  xsmall: {
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
