import { ButtonProps, ViewPropsGetter, ViewStyleGetter } from '@reflex-ui/core';
import {
  disabledDefaultButtonTextStyle,
  getDefaultButtonTextStyle,
  getDisabledDefaultButtonContainerStyle,
  getEnabledDefaultButtonContainerStyle,
  getFocusedDefaultButtonContainerStyle,
  getHoveredDefaultButtonContainerStyle,
  getPressedDefaultButtonContainerStyle,
} from '../default';

export const getCommonOutlinedButtonContainerProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getCommonOutlinedButtonContainerStyle(props),
});

export const getCommonOutlinedButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = props => ({
  borderColor: getDefaultButtonTextStyle(props).color,
});

export const getDisabledOutlinedButtonContainerProps: ViewPropsGetter<
  ButtonProps
> = (props: ButtonProps) => ({
  style: {
    ...getDisabledDefaultButtonContainerStyle(props),
    borderColor: disabledDefaultButtonTextStyle.color,
  },
});

export const getEnabledOutlinedButtonContainerProps: ViewPropsGetter<
  ButtonProps
> = (props: ButtonProps) => ({
  style: getEnabledDefaultButtonContainerStyle(props),
});

export const getFocusedOutlinedButtonContainerProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getFocusedDefaultButtonContainerStyle(props),
});

export const getHoveredOutlinedButtonContainerProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getHoveredDefaultButtonContainerStyle(props),
});

export const getPressedOutlinedButtonContainerProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getPressedDefaultButtonContainerStyle(props),
});
