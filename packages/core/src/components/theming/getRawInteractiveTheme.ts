import { getRawPrimitiveTheme } from './getRawPrimitiveTheme';
import { InteractiveSubTheme } from './InteractiveSubTheme';
import { PrimitiveTheme } from './PrimitiveTheme';

export const getRawInteractiveTheme = <
  ComponentProps,
  PrimitiveProps
>(): InteractiveSubTheme<PrimitiveTheme<ComponentProps, PrimitiveProps>> => ({
  allStates: getRawPrimitiveTheme<PrimitiveProps>(),
  disabled: getRawPrimitiveTheme<PrimitiveProps>(),
  enabled: getRawPrimitiveTheme<PrimitiveProps>(),
  focused: getRawPrimitiveTheme<PrimitiveProps>(),
  hovered: getRawPrimitiveTheme<PrimitiveProps>(),
  pressed: getRawPrimitiveTheme<PrimitiveProps>(),
});
