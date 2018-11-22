import { MarginProps } from '../../margin';
import { OptionalSizeProps, SizeProps } from '../../SizeProps';
import { OptionalThemed, Themed } from '../../theming';
import { IconWrapperSubPropsGetter } from './IconWrapperSubPropsGetter';

export interface IconWrapperProps extends MarginProps, SizeProps, Themed {
  readonly children?: React.ReactNode;
  readonly color?: string;
  readonly getSubProps?: IconWrapperSubPropsGetter;
  readonly noContainer?: boolean;
}

export interface OptionalIconWrapperProps
  extends MarginProps,
    OptionalSizeProps,
    OptionalThemed {
  readonly children?: React.ReactNode;
  readonly color?: string;
  readonly getSubProps?: IconWrapperSubPropsGetter;
  readonly noContainer?: boolean;
}
