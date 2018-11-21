import { PrimitiveTheme } from './PrimitiveTheme';

export const getRawPrimitiveTheme = <PrimitiveProps>(): PrimitiveTheme<
  {},
  PrimitiveProps
> => ({
  getProps: () => ({} as PrimitiveProps),
  props: {} as PrimitiveProps,
});
