import { ButtonSubName, OptionalButtonVariantTheme } from '@reflex-ui/core';

import { containedStaticButtonContainerTheme } from './container';
import {
  containedStaticButtonLeadingIconTheme,
  containedStaticButtonTrailingIconTheme,
} from './sideIcons';
import { containedStaticButtonTextTheme } from './text';

export const containedStaticButtonTheme: OptionalButtonVariantTheme = {
  [ButtonSubName.CONTAINER]: containedStaticButtonContainerTheme,
  [ButtonSubName.LEADING_ICON]: containedStaticButtonLeadingIconTheme,
  [ButtonSubName.TEXT]: containedStaticButtonTextTheme,
  [ButtonSubName.TRAILING_ICON]: containedStaticButtonTrailingIconTheme,
};
