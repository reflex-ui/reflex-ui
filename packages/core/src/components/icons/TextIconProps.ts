import { TextProps } from 'react-native';
import { IconProps } from './IconProps';

export interface TextIconProps extends IconProps, TextProps {
  name?: string;
}
