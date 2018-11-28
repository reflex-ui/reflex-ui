import * as React from 'react';
import { SubProps } from './SubProps';

export interface SubTheme<ComponentProps, PrimitiveProps> {
  readonly component: React.ComponentType<
    SubProps<ComponentProps> & PrimitiveProps
  >;
}

export type OptionalSubTheme<ComponentProps, PrimitiveProps> = Partial<
  SubTheme<ComponentProps, PrimitiveProps>
>;
