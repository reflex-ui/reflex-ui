import {
  getThemedColor,
  SpecialButtonProps,
  ViewPropsGetter,
  ViewStyleGetter,
} from '@reflex-ui/core';
import * as Color from 'color';

export const getDisabledContainedButtonViewProps: ViewPropsGetter<
  SpecialButtonProps
> = props => ({
  style: getDisabledContainedButtonViewStyle(props),
});

export const getDisabledContainedButtonViewStyle: ViewStyleGetter<
  SpecialButtonProps
> = ({ colorTheme, theme: { palette } }) => ({
  backgroundColor: getThemedColor({ colorTheme, palette }),
});

export const getEnabledContainedButtonViewProps: ViewPropsGetter<
  SpecialButtonProps
> = props => ({
  style: getEnabledContainedButtonViewStyle(props),
});

export const getEnabledContainedButtonViewStyle: ViewStyleGetter<
  SpecialButtonProps
> = ({ colorTheme, theme: { palette } }) => ({
  backgroundColor: getThemedColor({ colorTheme, palette }),
});

export const getFocusedContainedButtonViewProps: ViewPropsGetter<
  SpecialButtonProps
> = props => ({
  style: getFocusedContainedButtonViewStyle(props),
});

export const getFocusedContainedButtonViewStyle: ViewStyleGetter<
  SpecialButtonProps
> = ({ colorTheme, theme: { palette } }) => ({
  backgroundColor: Color.rgb(getThemedColor({ colorTheme, palette }))
    .lighten(0.35)
    .toString(),
});

export const getHoveredContainedButtonViewProps: ViewPropsGetter<
  SpecialButtonProps
> = props => ({
  style: getHoveredContainedButtonViewStyle(props),
});

export const getHoveredContainedButtonViewStyle: ViewStyleGetter<
  SpecialButtonProps
> = ({ colorTheme, theme: { palette } }) => ({
  backgroundColor: Color.rgb(getThemedColor({ colorTheme, palette }))
    .lighten(0.12)
    .toString(),
});

export const getPressedContainedButtonViewProps: ViewPropsGetter<
  SpecialButtonProps
> = props => ({
  style: getHoveredContainedButtonViewStyle(props),
});
