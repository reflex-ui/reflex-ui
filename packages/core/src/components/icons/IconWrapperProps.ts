import { TextProps } from 'react-native';

import { MarginProps } from '../../margin';
import { Size } from '../../Size';
import { OptionalThemed, Themed } from '../../theming';
import { ViewPropsGetter } from '../views';

export interface IconWrapperProps extends MarginProps, TextProps, Themed {
  children?: React.ReactNode;
  getContainerProps?: ViewPropsGetter<IconWrapperProps>;
  noContainer?: boolean;
  size: Size;
}

export interface OptionalIconWrapperProps
  extends MarginProps,
    TextProps,
    OptionalThemed {
  children?: React.ReactNode;
  getContainerProps?: ViewPropsGetter<IconWrapperProps>;
  noContainer?: boolean;
  size?: Size;
}
