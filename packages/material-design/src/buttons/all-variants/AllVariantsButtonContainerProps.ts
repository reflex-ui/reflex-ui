import {
  ButtonProps,
  getSizedMarginStyle,
  ViewPropsGetter,
  ViewStyleGetter,
} from '@reflex-ui/core';
import { buttonSizedMarginStyle } from './buttonSizedMarginStyle';

export const getAllVariantsCommonButtonContainerProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getAllVariantsCommonButtonContainerStyle(props),
});

export const getAllVariantsCommonButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = props => ({
  flexGrow: props.fullWidth ? 1 : undefined,
  ...getSizedMarginStyle(buttonSizedMarginStyle)(props),
});
