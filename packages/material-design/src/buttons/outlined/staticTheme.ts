import { ButtonSubName, OptionalButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { containedStaticButtonTheme } from '../contained/staticTheme';
import {
  defaultStaticButtonLeadingIconTheme,
  defaultStaticButtonTrailingIconTheme,
} from '../default/sideIcons';
import { outlinedStaticButtonContainerTheme } from './container';
import { outlinedStaticButtonTextTheme } from './text';

export const partialOutlinedStaticButtonTheme: OptionalButtonTheme = {
  [ButtonSubName.CONTAINER]: outlinedStaticButtonContainerTheme,
  [ButtonSubName.LEADING_ICON]: defaultStaticButtonLeadingIconTheme,
  [ButtonSubName.TEXT]: outlinedStaticButtonTextTheme,
  [ButtonSubName.TRAILING_ICON]: defaultStaticButtonTrailingIconTheme,
};

export const outlinedStaticButtonTheme: OptionalButtonTheme = merge<
  {},
  OptionalButtonTheme,
  OptionalButtonTheme
>({}, containedStaticButtonTheme, partialOutlinedStaticButtonTheme);
