import {
  ButtonProps,
  OptionalInteractivityStateTheme,
  OptionalSizedSubcomponentTheme,
  OptionalTextTheme,
} from '@reflex-ui/core';

import { defaultStaticButtonIconTheme } from '../default/icon';

// tslint:disable-next-line:max-line-length
export const outlinedStaticButtonLeadingIconTheme: OptionalSizedSubcomponentTheme<
  OptionalInteractivityStateTheme<OptionalTextTheme<ButtonProps>>
> = {
  ...defaultStaticButtonIconTheme,
};

// tslint:disable-next-line:max-line-length
export const outlinedStaticButtonTrailingIconTheme: OptionalSizedSubcomponentTheme<
  OptionalInteractivityStateTheme<OptionalTextTheme<ButtonProps>>
> = {
  ...outlinedStaticButtonLeadingIconTheme,
};
