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

export const defaultButtonLeftIconContainerStyle: TextStyle = {
  marginLeft: 0,
};

export const defaultButtonLeftIconContainerProps: TextProps = {
  style: defaultButtonLeftIconContainerStyle,
};

export const defaultButtonRightIconContainerStyle: TextStyle = {
  marginRight: 0,
};

export const defaultButtonRightIconContainerProps: TextProps = {
  style: defaultButtonRightIconContainerStyle,
};
