import { MarginProps } from '../../margin';
import { SizeProps } from '../../SizeProps';
import { Themed } from '../../theming';
import { IconWrapperSubPropsGetter } from './IconWrapperSubPropsGetter';

export interface IconWrapperProps extends MarginProps, SizeProps, Themed {
  readonly children?: React.ReactNode;
  readonly color?: string;
  readonly getSubProps?: IconWrapperSubPropsGetter;
  readonly noContainer?: boolean;
}

export type OptionalIconWrapperProps = Partial<IconWrapperProps>;
