import { ColorTheme, InteractivityState, Theme } from '@reflex-ui/core';

export interface ThemedColorByInteractivityData {
  readonly colorTheme: ColorTheme;
  readonly interactivityState?: InteractivityState;
  readonly theme: Theme;
}
