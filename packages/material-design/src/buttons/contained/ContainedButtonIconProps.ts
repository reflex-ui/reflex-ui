import { ButtonProps, TextPropsGetter } from '@reflex-ui/core';
import { TextProps } from 'react-native';
import { getContainedButtonTextColorStyle } from './ContainedButtonTextProps';

// prettier-ignore
import {
  disabledDefaultButtonTextStyle,
} from '../default/DefaultButtonTextProps';

export const disabledContainedButtonIconProps: TextProps = {
  style: { ...disabledDefaultButtonTextStyle },
};

export const getContainedButtonIconProps: TextPropsGetter<
  ButtonProps
> = props => ({
  style: {
    ...getContainedButtonTextColorStyle(props),
  },
});
