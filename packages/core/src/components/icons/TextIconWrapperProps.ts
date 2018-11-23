import { IconWrapperProps } from './IconWrapperProps';

export interface TextIconWrapperProps extends IconWrapperProps {
  readonly name: string;
}

export type OptionalTextIconWrapperProps = Partial<TextIconWrapperProps>;
