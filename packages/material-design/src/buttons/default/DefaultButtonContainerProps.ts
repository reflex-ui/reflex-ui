import {
  ButtonProps,
  InteractivityType,
  ViewPropsGetter,
  ViewStyleGetter,
} from '@reflex-ui/core';
import { getThemedOverlayColorByInteractivity } from '../../palette';

export const getDisabledDefaultButtonContainerProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getDisabledDefaultButtonContainerStyle(props),
});

export const getDisabledDefaultButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = ({ colorTheme, theme }) => ({
  backgroundColor: getThemedOverlayColorByInteractivity({
    colorTheme,
    interactivityType: InteractivityType.DISABLED,
    theme,
  }),
});

export const getEnabledDefaultButtonContainerProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getEnabledDefaultButtonContainerStyle(props),
});

export const getEnabledDefaultButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = ({ colorTheme, theme }) => ({
  backgroundColor: getThemedOverlayColorByInteractivity({
    colorTheme,
    interactivityType: InteractivityType.ENABLED,
    theme,
  }),
});

export const getFocusedDefaultButtonContainerProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getFocusedDefaultButtonContainerStyle(props),
});

export const getFocusedDefaultButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = ({ colorTheme, theme }) => ({
  backgroundColor: getThemedOverlayColorByInteractivity({
    colorTheme,
    interactivityType: InteractivityType.FOCUSED,
    theme,
  }),
});

export const getHoveredDefaultButtonContainerProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getHoveredDefaultButtonContainerStyle(props),
});

export const getHoveredDefaultButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = ({ colorTheme, theme }) => ({
  backgroundColor: getThemedOverlayColorByInteractivity({
    colorTheme,
    interactivityType: InteractivityType.HOVERED,
    theme,
  }),
});

export const getPressedDefaultButtonContainerProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getPressedDefaultButtonContainerStyle(props),
});

export const getPressedDefaultButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = ({ colorTheme, theme }) => ({
  backgroundColor: getThemedOverlayColorByInteractivity({
    colorTheme,
    interactivityType: InteractivityType.PRESSED,
    theme,
  }),
});
