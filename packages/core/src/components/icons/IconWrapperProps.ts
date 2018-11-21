import { MarginProps } from '../../margin';
import { OptionalSizeProps, SizeProps } from '../../SizeProps';
import { OptionalThemed, Themed } from '../../theming';
import { IconWrapperSubPropsGetter } from './IconWrapperSubPropsGetter';

export interface IconWrapperProps extends MarginProps, SizeProps, Themed {
  children?: React.ReactNode;
  color?: string;
  getSubProps?: IconWrapperSubPropsGetter;
  noContainer?: boolean;
}

export interface OptionalIconWrapperProps
  extends MarginProps,
    OptionalSizeProps,
    OptionalThemed {
  children?: React.ReactNode;
  color?: string;
  getSubProps?: IconWrapperSubPropsGetter;
  noContainer?: boolean;
}
