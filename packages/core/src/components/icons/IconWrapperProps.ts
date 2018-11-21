import { MarginProps } from '../../margin';
import { Size } from '../../Size';
import { OptionalThemed, Themed } from '../../theming';
import { IconWrapperSubPropsGetter } from './IconWrapperSubPropsGetter';

export interface IconWrapperProps extends MarginProps, Themed {
  children?: React.ReactNode;
  color?: string;
  getSubProps?: IconWrapperSubPropsGetter;
  noContainer?: boolean;
  size: Size;
}

export interface OptionalIconWrapperProps extends MarginProps, OptionalThemed {
  children?: React.ReactNode;
  color?: string;
  getSubProps?: IconWrapperSubPropsGetter;
  noContainer?: boolean;
  size?: Size;
}
