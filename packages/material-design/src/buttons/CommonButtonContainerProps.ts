import {
  SpecialButtonProps,
  ViewPropsGetter,
  ViewStyleGetter,
} from '@reflex-ui/core';

export const getCommonButtonViewProps: ViewPropsGetter<
  SpecialButtonProps
> = props => ({
  style: getCommonButtonViewStyle(props),
});

export const getCommonButtonViewStyle: ViewStyleGetter<SpecialButtonProps> = ({
  fullWidth,
}) => ({
  flexDirection: fullWidth ? 'column' : 'row',
  flexGrow: fullWidth ? 1 : undefined,
});
