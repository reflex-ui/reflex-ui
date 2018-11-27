import { PrimitiveTheme } from '../PrimitiveTheme';
import { InteractiveSubTheme } from '../subcomponents/InteractiveSubTheme';
import { getRawPrimitiveTheme } from './getRawPrimitiveTheme';

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
