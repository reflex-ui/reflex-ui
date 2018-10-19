import {
  getThemedColor,
  SpecialButtonProps,
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
  SpecialButtonProps
> = props => ({
  style: getCommonOutlinedButtonViewStyle(props),
});

export const getCommonOutlinedButtonViewStyle: ViewStyleGetter<
  SpecialButtonProps
> = ({ colorTheme, theme: { palette } }): ViewStyle => ({
  borderColor: getThemedColor({ colorTheme, palette }),
});

export const getDisabledOutlinedButtonViewProps: ViewPropsGetter<
  SpecialButtonProps
> = (props: SpecialButtonProps) => ({
  style: getDisabledDefaultButtonViewStyle(props),
});

export const getEnabledOutlinedButtonViewProps: ViewPropsGetter<
  SpecialButtonProps
> = (props: SpecialButtonProps) => ({
  style: getEnabledDefaultButtonViewStyle(props),
});

export const getFocusedOutlinedButtonViewProps: ViewPropsGetter<
  SpecialButtonProps
> = props => ({
  style: getFocusedDefaultButtonViewStyle(props),
});

export const getHoveredOutlinedButtonViewProps: ViewPropsGetter<
  SpecialButtonProps
> = props => ({
  style: getHoveredDefaultButtonViewStyle(props),
});

export const getPressedOutlinedButtonViewProps: ViewPropsGetter<
  SpecialButtonProps
> = props => ({
  style: getPressedDefaultButtonViewStyle(props),
});
