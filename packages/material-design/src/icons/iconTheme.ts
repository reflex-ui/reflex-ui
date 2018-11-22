import {
  getSizedMarginStyle,
  getThemedColor,
  IconWrapperTheme,
  IconWrapperProps,
  OptionalIconWrapperTheme,
  OptionalPrimitiveTheme,
  OptionalSizedSubcomponentTheme,
  OptionalViewTheme,
  rawIconWrapperTheme,
  Size,
  SizedMarginStyle,
  TextIconProps,
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

export const getAllSizesIconStyle: TextStyleGetter<IconWrapperProps> = ({
  color,
  colorTheme,
  paletteTheme,
}) => ({
  color: color ? color : getThemedColor({ colorTheme, paletteTheme }),
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

export const iconContainerTheme: OptionalSizedSubcomponentTheme<
  OptionalViewTheme<IconWrapperProps>
> = {
  allSizes: {
    getProps: getIconContainerProps,
  },
};

export const iconIconTheme: OptionalSizedSubcomponentTheme<
  OptionalPrimitiveTheme<IconWrapperProps, TextIconProps>
> = {
  allSizes: {
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
  large: {
    props: {
      style: {
        fontSize: 32,
      },
    },
  },
  medium: {
    props: {
      style: {
        fontSize: 24,
      },
    },
  },
  small: {
    props: {
      style: {
        fontSize: 16,
      },
    },
  },
  xlarge: {
    props: {
      style: {
        fontSize: 48,
      },
    },
  },
  xsmall: {
    props: {
      style: {
        fontSize: 12,
      },
    },
  },
};

export const optionalIconTheme: OptionalIconWrapperTheme = {
  container: iconContainerTheme,
  icon: iconIconTheme,
};

export const iconTheme: IconWrapperTheme = merge<
  {},
  IconWrapperTheme,
  OptionalIconWrapperTheme
>({}, rawIconWrapperTheme, optionalIconTheme);
