import { ButtonProps, ViewPropsGetter, ViewStyleGetter } from '@reflex-ui/core';
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
> = props => ({
  backgroundColor: getThemedInlayColorByInteractivity(props),
});

export const getEnabledContainedButtonContainerProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getEnabledContainedButtonContainerStyle(props),
});

export const getEnabledContainedButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = props => ({
  backgroundColor: getThemedInlayColorByInteractivity(props),
});

export const getFocusedContainedButtonContainerProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getFocusedContainedButtonContainerStyle(props),
});

export const getFocusedContainedButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = props => ({
  backgroundColor: getThemedInlayColorByInteractivity(props),
});

export const getHoveredContainedButtonContainerProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getHoveredContainedButtonContainerStyle(props),
});

export const getHoveredContainedButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = props => ({
  backgroundColor: getThemedInlayColorByInteractivity(props),
});

export const getPressedContainedButtonContainerProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getPressedContainedButtonContainerStyle(props),
});

export const getPressedContainedButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = props => ({
  backgroundColor: getThemedInlayColorByInteractivity(props),
});
