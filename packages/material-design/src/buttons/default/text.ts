import {
  ButtonProps,
  getThemedColor,
  isWeb,
  OptionalInteractivityStateTheme,
  OptionalSizedSubcomponentTheme,
  OptionalTextTheme,
  TextPropsGetter,
  TextStyleGetter,
} from '@reflex-ui/core';
import { TextProps, TextStyle } from 'react-native';

import { disabledPaletteColor } from '../../palette/disabledPaletteColor';

export const disabledDefaultButtonTextStyle: TextStyle = {
  color: disabledPaletteColor.normal.onColor,
};

export const disabledDefaultButtonTextProps: TextProps = {
  style: { ...disabledDefaultButtonTextStyle },
};

export const getDefaultButtonTextColorStyle: TextStyleGetter<ButtonProps> = ({
  colorTheme,
  paletteTheme,
}) => ({
  color: getThemedColor({ colorTheme, paletteTheme }),
});

export const getDefaultButtonTextStyle: TextStyleGetter<ButtonProps> = (
  props: ButtonProps,
) => ({
  ...getDefaultButtonTextColorStyle(props),
});

export const getDefaultButtonTextProps: TextPropsGetter<
  ButtonProps
> = props => ({
  style: getDefaultButtonTextStyle(props),
});

export const defaultStaticButtonTextTheme: OptionalSizedSubcomponentTheme<
  OptionalInteractivityStateTheme<OptionalTextTheme<ButtonProps>>
> = {
  allSizes: {
    allStates: {
      getProps: getDefaultButtonTextProps,
      props: {
        style: {
          marginTop: isWeb ? -3 : 0,
        },
      },
    },
    disabled: {
      props: disabledDefaultButtonTextProps,
    },
  },
};
