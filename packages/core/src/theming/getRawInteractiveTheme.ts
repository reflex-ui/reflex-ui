import { getRawPrimitiveTheme } from './getRawPrimitiveTheme';
import { InteractivityStateTheme } from './InteractivityStateTheme';
import { PrimitiveTheme } from './PrimitiveTheme';

export const getRawInteractiveTheme = <
  ComponentProps,
  PrimitiveProps
>(): InteractivityStateTheme<
  PrimitiveTheme<ComponentProps, PrimitiveProps>
> => ({
  allStates: getRawPrimitiveTheme<PrimitiveProps>(),
  disabled: getRawPrimitiveTheme<PrimitiveProps>(),
  enabled: getRawPrimitiveTheme<PrimitiveProps>(),
  focused: getRawPrimitiveTheme<PrimitiveProps>(),
  hovered: getRawPrimitiveTheme<PrimitiveProps>(),
  pressed: getRawPrimitiveTheme<PrimitiveProps>(),
});
