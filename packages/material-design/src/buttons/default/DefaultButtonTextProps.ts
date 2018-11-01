import {
  ButtonProps,
  getThemedColor,
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
  theme: { palette },
}) => ({
  color: getThemedColor({ colorTheme, palette }),
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
