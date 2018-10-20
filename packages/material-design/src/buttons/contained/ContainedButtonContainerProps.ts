import {
  ButtonProps,
  getThemedColor,
  ViewPropsGetter,
  ViewStyleGetter,
} from '@reflex-ui/core';
import * as Color from 'color';

export const getDisabledContainedButtonViewProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getDisabledContainedButtonViewStyle(props),
});

export const getDisabledContainedButtonViewStyle: ViewStyleGetter<
  ButtonProps
> = ({ colorTheme, theme: { palette } }) => ({
  backgroundColor: getThemedColor({ colorTheme, palette }),
});

export const getEnabledContainedButtonViewProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getEnabledContainedButtonViewStyle(props),
});

export const getEnabledContainedButtonViewStyle: ViewStyleGetter<
  ButtonProps
> = ({ colorTheme, theme: { palette } }) => ({
  backgroundColor: getThemedColor({ colorTheme, palette }),
});

export const getFocusedContainedButtonViewProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getFocusedContainedButtonViewStyle(props),
});

export const getFocusedContainedButtonViewStyle: ViewStyleGetter<
  ButtonProps
> = ({ colorTheme, theme: { palette } }) => ({
  backgroundColor: Color.rgb(getThemedColor({ colorTheme, palette }))
    .lighten(0.35)
    .toString(),
});

export const getHoveredContainedButtonViewProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getHoveredContainedButtonViewStyle(props),
});

export const getHoveredContainedButtonViewStyle: ViewStyleGetter<
  ButtonProps
> = ({ colorTheme, theme: { palette } }) => ({
  backgroundColor: Color.rgb(getThemedColor({ colorTheme, palette }))
    .lighten(0.12)
    .toString(),
});

export const getPressedContainedButtonViewProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getHoveredContainedButtonViewStyle(props),
});
