import { ButtonProps, ViewPropsGetter, ViewStyleGetter } from '@reflex-ui/core';

export const getCommonButtonContainerProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getCommonButtonContainerStyle(props),
});

export const getCommonButtonContainerStyle: ViewStyleGetter<ButtonProps> = ({
  fullWidth,
}) => ({
  flexDirection: fullWidth ? 'column' : 'row',
  flexGrow: fullWidth ? 1 : undefined,
});
