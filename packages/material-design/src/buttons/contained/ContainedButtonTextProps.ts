import {
  getThemedColor,
  SpecialButtonProps,
  TextPropsGetter,
  TextStyleGetter,
} from '@reflex-ui/core';

export const getContainedButtonTextColorStyle: TextStyleGetter<
  SpecialButtonProps
> = ({ colorTheme, theme: { palette } }) => ({
  color: getThemedColor({ colorTheme, palette, onColor: true }),
});

export const getContainedButtonTextProps: TextPropsGetter<
  SpecialButtonProps
> = (props: SpecialButtonProps) => ({
  style: getContainedButtonTextStyle(props),
});

export const getContainedButtonTextStyle: TextStyleGetter<
  SpecialButtonProps
> = (props: SpecialButtonProps) => ({
  ...getContainedButtonTextColorStyle(props),
});
