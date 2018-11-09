import { ButtonProps, TextPropsGetter } from '@reflex-ui/core';
import { TextProps, TextStyle } from 'react-native';

import {
  disabledDefaultButtonTextStyle,
  getDefaultButtonTextColorStyle,
} from './DefaultButtonTextProps';

export const disabledDefaultButtonIconProps: TextProps = {
  style: { ...disabledDefaultButtonTextStyle },
};

export const getDefaultButtonIconProps: TextPropsGetter<
  ButtonProps
> = props => ({
  style: {
    ...getDefaultButtonTextColorStyle(props),
  },
});

export const defaultButtonLeadingIconContainerStyle: TextStyle = {
  marginStart: 0,
};

export const defaultButtonLeadingIconContainerProps: TextProps = {
  style: defaultButtonLeadingIconContainerStyle,
};

export const defaultButtonTrailingIconContainerStyle: TextStyle = {
  marginEnd: 0,
};

export const defaultButtonTrailingIconContainerProps: TextProps = {
  style: defaultButtonTrailingIconContainerStyle,
};
