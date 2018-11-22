import { IconWrapperProps, OptionalIconWrapperProps } from './IconWrapperProps';

export interface TextIconWrapperProps extends IconWrapperProps {
  readonly name: string;
}

export interface OptionalTextIconWrapperProps extends OptionalIconWrapperProps {
  readonly name?: string;
}
