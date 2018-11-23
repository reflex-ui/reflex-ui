import { getRawInteractiveTheme } from './getRawInteractiveTheme';
import { InteractiveSubTheme } from './InteractiveSubTheme';
import { PrimitiveTheme } from './PrimitiveTheme';
import { SizedSubTheme } from './SizedSubTheme';

export const getRawSizedInteractiveTheme = <
  ComponentProps,
  PrimitiveProps
>(): SizedSubTheme<
  InteractiveSubTheme<PrimitiveTheme<ComponentProps, PrimitiveProps>>
> => ({
  allSizes: getRawInteractiveTheme<ComponentProps, PrimitiveProps>(),
  large: getRawInteractiveTheme<ComponentProps, PrimitiveProps>(),
  medium: getRawInteractiveTheme<ComponentProps, PrimitiveProps>(),
  none: getRawInteractiveTheme<ComponentProps, PrimitiveProps>(),
  small: getRawInteractiveTheme<ComponentProps, PrimitiveProps>(),
  xlarge: getRawInteractiveTheme<ComponentProps, PrimitiveProps>(),
  xsmall: getRawInteractiveTheme<ComponentProps, PrimitiveProps>(),
});
