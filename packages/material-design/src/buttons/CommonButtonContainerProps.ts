import { ButtonProps, ViewPropsGetter, ViewStyleGetter } from '@reflex-ui/core';

export const getCommonButtonViewProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getCommonButtonViewStyle(props),
});

export const getCommonButtonViewStyle: ViewStyleGetter<ButtonProps> = ({
  fullWidth,
}) => ({
  flexDirection: fullWidth ? 'column' : 'row',
  flexGrow: fullWidth ? 1 : undefined,
});
