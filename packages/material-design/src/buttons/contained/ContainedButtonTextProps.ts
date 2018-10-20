import {
  ButtonProps,
  getThemedColor,
  TextPropsGetter,
  TextStyleGetter,
} from '@reflex-ui/core';

export const getContainedButtonTextColorStyle: TextStyleGetter<ButtonProps> = ({
  colorTheme,
  theme: { palette },
}) => ({
  color: getThemedColor({ colorTheme, palette, onColor: true }),
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
