import {
  getThemedColor,
  SpecialButtonProps,
  TextPropsGetter,
  TextStyleGetter,
} from '@reflex-ui/core';

export const getDefaultButtonTextColorStyle: TextStyleGetter<
  SpecialButtonProps
> = ({ colorTheme, theme: { palette } }) => ({
  color: getThemedColor({ colorTheme, palette }),
});

export const getDefaultButtonTextStyle: TextStyleGetter<SpecialButtonProps> = (
  props: SpecialButtonProps,
) => ({
  ...getDefaultButtonTextColorStyle(props),
});

export const getDefaultButtonTextProps: TextPropsGetter<
  SpecialButtonProps
> = props => ({
  style: getDefaultButtonTextStyle(props),
});
