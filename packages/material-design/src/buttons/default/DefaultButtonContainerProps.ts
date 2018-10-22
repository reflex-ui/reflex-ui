import {
  ButtonProps,
  getThemedColor,
  ViewPropsGetter,
  ViewStyleGetter,
} from '@reflex-ui/core';
import * as Color from 'color';

export const getDisabledDefaultButtonContainerProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getDisabledDefaultButtonContainerStyle(props),
});

export const getDisabledDefaultButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = () => ({
  backgroundColor: 'transparent',
});

export const getEnabledDefaultButtonContainerProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getEnabledDefaultButtonContainerStyle(props),
});

export const getEnabledDefaultButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = () => ({
  backgroundColor: 'transparent',
});

export const getFocusedDefaultButtonContainerProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getFocusedDefaultButtonContainerStyle(props),
});

export const getFocusedDefaultButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = ({ colorTheme, theme: { palette } }) => ({
  backgroundColor: Color.rgb(getThemedColor({ colorTheme, palette }))
    .fade(0.89)
    .toString(),
});

export const getHoveredDefaultButtonContainerProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getHoveredDefaultButtonContainerStyle(props),
});

export const getHoveredDefaultButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = ({ colorTheme, theme: { palette } }) => ({
  backgroundColor: Color.rgb(getThemedColor({ colorTheme, palette }))
    .fade(0.94)
    .toString(),
});

export const getPressedDefaultButtonContainerProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getPressedDefaultButtonContainerStyle(props),
});

export const getPressedDefaultButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = ({ colorTheme, theme: { palette } }) => ({
  backgroundColor: Color.rgb(getThemedColor({ colorTheme, palette }))
    .fade(0.81)
    .toString(),
});
