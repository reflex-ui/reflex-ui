import {
  ButtonProps,
  getThemedColor,
  TextPropsGetter,
  TextStyleGetter,
} from '@reflex-ui/core';
import { TextProps } from 'react-native';

// prettier-ignore
import {
  disabledDefaultButtonTextStyle,
} from '../default/DefaultButtonTextProps';

export const disabledContainedButtonTextProps: TextProps = {
  style: { ...disabledDefaultButtonTextStyle },
};

export const getContainedButtonTextColorStyle: TextStyleGetter<ButtonProps> = ({
  colorTheme,
  paletteTheme,
}) => ({
  color: getThemedColor({ colorTheme, onColor: true, paletteTheme }),
});

export const getContainedButtonTextProps: TextPropsGetter<ButtonProps> = (
  props: ButtonProps,
) => ({
  style: getContainedButtonTextStyle(props),
});

export const getContainedButtonTextStyle: TextStyleGetter<ButtonProps> = (
  props: ButtonProps,
) => ({
  ...getContainedButtonTextColorStyle(props),
});
