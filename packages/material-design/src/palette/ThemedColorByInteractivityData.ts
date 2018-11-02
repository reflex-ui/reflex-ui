import { ColorTheme, InteractivityType, Theme } from '@reflex-ui/core';

export interface ThemedColorByInteractivityData {
  readonly colorTheme: ColorTheme;
  readonly interactivityType: InteractivityType;
  readonly theme: Theme;
}
