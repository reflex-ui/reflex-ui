import {
  ButtonProps,
  getThemedColor,
  ViewPropsGetter,
  ViewStyleGetter,
} from '@reflex-ui/core';
import { ViewStyle } from 'react-native';
import {
  getDisabledDefaultButtonViewStyle,
  getEnabledDefaultButtonViewStyle,
  getFocusedDefaultButtonViewStyle,
  getHoveredDefaultButtonViewStyle,
  getPressedDefaultButtonViewStyle,
} from '../default';

export const getCommonOutlinedButtonViewProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getCommonOutlinedButtonViewStyle(props),
});

export const getCommonOutlinedButtonViewStyle: ViewStyleGetter<ButtonProps> = ({
  colorTheme,
  theme: { palette },
}): ViewStyle => ({
  borderColor: getThemedColor({ colorTheme, palette }),
});

export const getDisabledOutlinedButtonViewProps: ViewPropsGetter<
  ButtonProps
> = (props: ButtonProps) => ({
  style: getDisabledDefaultButtonViewStyle(props),
});

export const getEnabledOutlinedButtonViewProps: ViewPropsGetter<ButtonProps> = (
  props: ButtonProps,
) => ({
  style: getEnabledDefaultButtonViewStyle(props),
});

export const getFocusedOutlinedButtonViewProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getFocusedDefaultButtonViewStyle(props),
});

export const getHoveredOutlinedButtonViewProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getHoveredDefaultButtonViewStyle(props),
});

export const getPressedOutlinedButtonViewProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getPressedDefaultButtonViewStyle(props),
});
