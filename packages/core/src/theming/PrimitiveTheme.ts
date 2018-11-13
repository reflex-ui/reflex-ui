import { PrimitivePropsGetter } from '../components/PrimitivePropsGetter';

export interface PrimitiveTheme<ComponentProps, PrimitiveProps> {
  readonly getProps: PrimitivePropsGetter<ComponentProps, PrimitiveProps>;
  readonly props: PrimitiveProps;
}

export interface OptionalPrimitiveTheme<ComponentProps, PrimitiveProps> {
  readonly getProps?: PrimitivePropsGetter<ComponentProps, PrimitiveProps>;
  readonly props?: PrimitiveProps;
}
