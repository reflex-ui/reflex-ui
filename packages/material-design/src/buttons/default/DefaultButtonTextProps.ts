import {
  ButtonProps,
  getThemedColor,
  TextPropsGetter,
  TextStyleGetter,
} from '@reflex-ui/core';

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
