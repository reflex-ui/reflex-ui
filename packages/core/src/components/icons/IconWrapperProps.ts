import { TextProps } from 'react-native';
import { Size, ViewPropsGetter } from '../';
import { OptionalThemed, Themed } from '../../theming';

export interface IconWrapperProps extends TextProps, Themed {
  children?: React.ReactNode;
  getContainerProps?: ViewPropsGetter<IconWrapperProps>;
  noContainer?: boolean;
  size: Size;
}

export interface OptionalIconWrapperProps extends TextProps, OptionalThemed {
  children?: React.ReactNode;
  getContainerProps?: ViewPropsGetter<IconWrapperProps>;
  noContainer?: boolean;
  size?: Size;
}
