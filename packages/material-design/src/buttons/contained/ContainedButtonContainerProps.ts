import {
  ButtonProps,
  getThemedColor,
  ViewPropsGetter,
  ViewStyleGetter,
} from '@reflex-ui/core';
import * as Color from 'color';

export const getDisabledContainedButtonContainerProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getDisabledContainedButtonContainerStyle(props),
});

export const getDisabledContainedButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = ({ colorTheme, theme: { palette } }) => ({
  backgroundColor: getThemedColor({ colorTheme, palette }),
});

export const getEnabledContainedButtonContainerProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getEnabledContainedButtonContainerStyle(props),
});

export const getEnabledContainedButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = ({ colorTheme, theme: { palette } }) => ({
  backgroundColor: getThemedColor({ colorTheme, palette }),
});

export const getFocusedContainedButtonContainerProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getFocusedContainedButtonContainerStyle(props),
});

export const getFocusedContainedButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = ({ colorTheme, theme: { palette } }) => ({
  backgroundColor: Color.rgb(getThemedColor({ colorTheme, palette }))
    .lighten(0.35)
    .toString(),
});

export const getHoveredContainedButtonContainerProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getHoveredContainedButtonContainerStyle(props),
});

export const getHoveredContainedButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = ({ colorTheme, theme: { palette } }) => ({
  backgroundColor: Color.rgb(getThemedColor({ colorTheme, palette }))
    .lighten(0.12)
    .toString(),
});

export const getPressedContainedButtonContainerProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getHoveredContainedButtonContainerStyle(props),
});
