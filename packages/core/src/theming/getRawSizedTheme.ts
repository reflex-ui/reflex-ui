import { getRawPrimitiveTheme } from './getRawPrimitiveTheme';
import { PrimitiveTheme } from './PrimitiveTheme';
import { SizedSubcomponentTheme } from './SizedSubcomponentTheme';

export const getRawSizedTheme = <
  ComponentProps,
  PrimitiveProps
>(): SizedSubcomponentTheme<
  PrimitiveTheme<ComponentProps, PrimitiveProps>
> => ({
  allSizes: getRawPrimitiveTheme<PrimitiveProps>(),
  large: getRawPrimitiveTheme<PrimitiveProps>(),
  medium: getRawPrimitiveTheme<PrimitiveProps>(),
  none: getRawPrimitiveTheme<PrimitiveProps>(),
  small: getRawPrimitiveTheme<PrimitiveProps>(),
  xlarge: getRawPrimitiveTheme<PrimitiveProps>(),
  xsmall: getRawPrimitiveTheme<PrimitiveProps>(),
});
