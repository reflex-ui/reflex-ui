import { ButtonSubName, OptionalButtonVariantTheme } from '@reflex-ui/core';

import { defaultStaticButtonContainerTheme } from './container';
import {
  defaultStaticButtonLeadingIconContainerTheme,
  defaultStaticButtonTrailingIconContainerTheme,
} from './sideIconContainers';
import {
  defaultStaticButtonLeadingIconTheme,
  defaultStaticButtonTrailingIconTheme,
} from './sideIcons';
import { defaultStaticButtonTextTheme } from './text';

export const defaultStaticButtonTheme: OptionalButtonVariantTheme = {
  [ButtonSubName.CONTAINER]: defaultStaticButtonContainerTheme,
  [ButtonSubName.LEADING_ICON]: defaultStaticButtonLeadingIconTheme,
  // tslint:disable-next-line:max-line-length
  [ButtonSubName.LEADING_ICON_CONTAINER]: defaultStaticButtonLeadingIconContainerTheme,
  [ButtonSubName.TEXT]: defaultStaticButtonTextTheme,
  [ButtonSubName.TRAILING_ICON]: defaultStaticButtonTrailingIconTheme,
  // tslint:disable-next-line:max-line-length
  [ButtonSubName.TRAILING_ICON_CONTAINER]: defaultStaticButtonTrailingIconContainerTheme,
};
