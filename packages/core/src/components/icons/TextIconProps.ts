import { TextProps } from 'react-native';
import { IconProps } from './IconProps';

export interface TextIconProps extends IconProps, TextProps {
  readonly name?: string;
}
