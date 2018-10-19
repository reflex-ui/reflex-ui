import {
  getThemedColor,
  SpecialButtonProps,
  ViewPropsGetter,
  ViewStyleGetter,
} from '@reflex-ui/core';
import * as Color from 'color';

export const getDisabledDefaultButtonViewProps: ViewPropsGetter<
  SpecialButtonProps
> = props => ({
  style: getDisabledDefaultButtonViewStyle(props),
});

export const getDisabledDefaultButtonViewStyle: ViewStyleGetter<
  SpecialButtonProps
> = () => ({
  backgroundColor: 'transparent',
});

export const getEnabledDefaultButtonViewProps: ViewPropsGetter<
  SpecialButtonProps
> = props => ({
  style: getEnabledDefaultButtonViewStyle(props),
});

export const getEnabledDefaultButtonViewStyle: ViewStyleGetter<
  SpecialButtonProps
> = () => ({
  backgroundColor: 'transparent',
});

export const getFocusedDefaultButtonViewProps: ViewPropsGetter<
  SpecialButtonProps
> = props => ({
  style: getFocusedDefaultButtonViewStyle(props),
});

export const getFocusedDefaultButtonViewStyle: ViewStyleGetter<
  SpecialButtonProps
> = ({ colorTheme, theme: { palette } }) => ({
  backgroundColor: Color.rgb(getThemedColor({ colorTheme, palette }))
    .fade(0.89)
    .toString(),
});

export const getHoveredDefaultButtonViewProps: ViewPropsGetter<
  SpecialButtonProps
> = props => ({
  style: getHoveredDefaultButtonViewStyle(props),
});

export const getHoveredDefaultButtonViewStyle: ViewStyleGetter<
  SpecialButtonProps
> = ({ colorTheme, theme: { palette } }) => ({
  backgroundColor: Color.rgb(getThemedColor({ colorTheme, palette }))
    .fade(0.94)
    .toString(),
});

export const getPressedDefaultButtonViewProps: ViewPropsGetter<
  SpecialButtonProps
> = props => ({
  style: getPressedDefaultButtonViewStyle(props),
});

export const getPressedDefaultButtonViewStyle: ViewStyleGetter<
  SpecialButtonProps
> = ({ colorTheme, theme: { palette } }) => ({
  backgroundColor: Color.rgb(getThemedColor({ colorTheme, palette }))
    .fade(0.81)
    .toString(),
});
