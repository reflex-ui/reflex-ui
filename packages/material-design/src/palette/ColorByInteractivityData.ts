import { InteractivityType } from '@reflex-ui/core';

export interface ColorByInteractivityData {
  readonly color: string;
  readonly disabledColor?: string;
  readonly type?: InteractivityType;
}
