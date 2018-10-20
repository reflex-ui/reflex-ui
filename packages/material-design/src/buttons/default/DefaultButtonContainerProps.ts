import {
  ButtonProps,
  getThemedColor,
  ViewPropsGetter,
  ViewStyleGetter,
} from '@reflex-ui/core';
import * as Color from 'color';

export const getDisabledDefaultButtonViewProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getDisabledDefaultButtonViewStyle(props),
});

export const getDisabledDefaultButtonViewStyle: ViewStyleGetter<
  ButtonProps
> = () => ({
  backgroundColor: 'transparent',
});

export const getEnabledDefaultButtonViewProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getEnabledDefaultButtonViewStyle(props),
});

export const getEnabledDefaultButtonViewStyle: ViewStyleGetter<
  ButtonProps
> = () => ({
  backgroundColor: 'transparent',
});

export const getFocusedDefaultButtonViewProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getFocusedDefaultButtonViewStyle(props),
});

export const getFocusedDefaultButtonViewStyle: ViewStyleGetter<ButtonProps> = ({
  colorTheme,
  theme: { palette },
}) => ({
  backgroundColor: Color.rgb(getThemedColor({ colorTheme, palette }))
    .fade(0.89)
    .toString(),
});

export const getHoveredDefaultButtonViewProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getHoveredDefaultButtonViewStyle(props),
});

export const getHoveredDefaultButtonViewStyle: ViewStyleGetter<ButtonProps> = ({
  colorTheme,
  theme: { palette },
}) => ({
  backgroundColor: Color.rgb(getThemedColor({ colorTheme, palette }))
    .fade(0.94)
    .toString(),
});

export const getPressedDefaultButtonViewProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getPressedDefaultButtonViewStyle(props),
});

export const getPressedDefaultButtonViewStyle: ViewStyleGetter<ButtonProps> = ({
  colorTheme,
  theme: { palette },
}) => ({
  backgroundColor: Color.rgb(getThemedColor({ colorTheme, palette }))
    .fade(0.81)
    .toString(),
});
