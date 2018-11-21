import { IconWrapperProps, OptionalIconWrapperProps } from './IconWrapperProps';

export interface TextIconWrapperProps extends IconWrapperProps {
  name: string;
}

export interface OptionalTextIconWrapperProps extends OptionalIconWrapperProps {
  name?: string;
}
