import { getRawPrimitiveTheme } from './getRawPrimitiveTheme';
import { PrimitiveTheme } from './PrimitiveTheme';
import { SizedSubTheme } from './SizedSubTheme';

export const getRawSizedTheme = <
  ComponentProps,
  PrimitiveProps
>(): SizedSubTheme<PrimitiveTheme<ComponentProps, PrimitiveProps>> => ({
  allSizes: getRawPrimitiveTheme<PrimitiveProps>(),
  large: getRawPrimitiveTheme<PrimitiveProps>(),
  medium: getRawPrimitiveTheme<PrimitiveProps>(),
  none: getRawPrimitiveTheme<PrimitiveProps>(),
  small: getRawPrimitiveTheme<PrimitiveProps>(),
  xlarge: getRawPrimitiveTheme<PrimitiveProps>(),
  xsmall: getRawPrimitiveTheme<PrimitiveProps>(),
});
