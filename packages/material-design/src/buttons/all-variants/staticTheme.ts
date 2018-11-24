import { ButtonSubName, OptionalButtonTheme } from '@reflex-ui/core';
import { allVariantsStaticButtonContainerTheme } from './container';
import { allVariantsStaticButtonIconTheme } from './icon';
import {
  allVariantsStaticButtonLeadingIconContainerTheme,
  allVariantsStaticButtonTrailingIconContainerTheme,
} from './sideIconContainers';
import {
  allVariantsStaticButtonLeadingIconTheme,
  allVariantsStaticButtonTrailingIconTheme,
} from './sideIcons';
import { allVariantsStaticButtonTextTheme } from './text';

export const allVariantsStaticButtonTheme: OptionalButtonTheme = {
  [ButtonSubName.CONTAINER]: allVariantsStaticButtonContainerTheme,
  [ButtonSubName.ICON]: allVariantsStaticButtonIconTheme,
  [ButtonSubName.LEADING_ICON]: allVariantsStaticButtonLeadingIconTheme,
  // tslint:disable-next-line:max-line-length
  [ButtonSubName.LEADING_ICON_CONTAINER]: allVariantsStaticButtonLeadingIconContainerTheme,
  [ButtonSubName.TEXT]: allVariantsStaticButtonTextTheme,
  [ButtonSubName.TRAILING_ICON]: allVariantsStaticButtonTrailingIconTheme,
  // tslint:disable-next-line:max-line-length
  [ButtonSubName.TRAILING_ICON_CONTAINER]: allVariantsStaticButtonTrailingIconContainerTheme,
};
