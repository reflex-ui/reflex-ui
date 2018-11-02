import {
  ButtonProps,
  InteractivityType,
  ViewPropsGetter,
  ViewStyleGetter,
} from '@reflex-ui/core';
// prettier-ignore
import {
  getThemedInlayColorByInteractivity,
} from '../../palette/getThemedInlayColorByInteractivity';

export const getDisabledContainedButtonContainerProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getDisabledContainedButtonContainerStyle(props),
});

export const getDisabledContainedButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = ({ colorTheme, theme }) => ({
  backgroundColor: getThemedInlayColorByInteractivity({
    colorTheme,
    interactivityType: InteractivityType.DISABLED,
    theme,
  }),
});

export const getEnabledContainedButtonContainerProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getEnabledContainedButtonContainerStyle(props),
});

export const getEnabledContainedButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = ({ colorTheme, theme }) => ({
  backgroundColor: getThemedInlayColorByInteractivity({
    colorTheme,
    interactivityType: InteractivityType.ENABLED,
    theme,
  }),
});

export const getFocusedContainedButtonContainerProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getFocusedContainedButtonContainerStyle(props),
});

export const getFocusedContainedButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = ({ colorTheme, theme }) => ({
  backgroundColor: getThemedInlayColorByInteractivity({
    colorTheme,
    interactivityType: InteractivityType.FOCUSED,
    theme,
  }),
});

export const getHoveredContainedButtonContainerProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getHoveredContainedButtonContainerStyle(props),
});

export const getHoveredContainedButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = ({ colorTheme, theme }) => ({
  backgroundColor: getThemedInlayColorByInteractivity({
    colorTheme,
    interactivityType: InteractivityType.HOVERED,
    theme,
  }),
});

export const getPressedContainedButtonContainerProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getPressedContainedButtonContainerStyle(props),
});

export const getPressedContainedButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = ({ colorTheme, theme }) => ({
  backgroundColor: getThemedInlayColorByInteractivity({
    colorTheme,
    interactivityType: InteractivityType.PRESSED,
    theme,
  }),
});
