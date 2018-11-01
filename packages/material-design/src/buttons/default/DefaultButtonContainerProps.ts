import { ButtonProps, ViewPropsGetter, ViewStyleGetter } from '@reflex-ui/core';
import { getThemedOverlayColorByInteractivity } from '../../palette';

export const getDisabledDefaultButtonContainerProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getDisabledDefaultButtonContainerStyle(props),
});

export const getDisabledDefaultButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = props => ({
  backgroundColor: getThemedOverlayColorByInteractivity(props),
});

export const getEnabledDefaultButtonContainerProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getEnabledDefaultButtonContainerStyle(props),
});

export const getEnabledDefaultButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = props => ({
  backgroundColor: getThemedOverlayColorByInteractivity(props),
});

export const getFocusedDefaultButtonContainerProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getFocusedDefaultButtonContainerStyle(props),
});

export const getFocusedDefaultButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = props => ({
  backgroundColor: getThemedOverlayColorByInteractivity(props),
});

export const getHoveredDefaultButtonContainerProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getHoveredDefaultButtonContainerStyle(props),
});

export const getHoveredDefaultButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = props => ({
  backgroundColor: getThemedOverlayColorByInteractivity(props),
});

export const getPressedDefaultButtonContainerProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getPressedDefaultButtonContainerStyle(props),
});

export const getPressedDefaultButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = props => ({
  backgroundColor: getThemedOverlayColorByInteractivity(props),
});
