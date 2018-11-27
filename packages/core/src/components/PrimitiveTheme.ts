import { PrimitivePropsGetter } from './PrimitivePropsGetter';

export interface PrimitiveTheme<ComponentProps, PrimitiveProps> {
  readonly getProps: PrimitivePropsGetter<ComponentProps, PrimitiveProps>;
  readonly props: PrimitiveProps;
}

export type OptionalPrimitiveTheme<ComponentProps, PrimitiveProps> = Partial<
  PrimitiveTheme<ComponentProps, PrimitiveProps>
>;
