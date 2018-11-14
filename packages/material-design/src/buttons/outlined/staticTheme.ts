import { ButtonSubName, OptionalButtonVariantTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { containedStaticButtonTheme } from '../contained/staticTheme';
import { outlinedStaticButtonContainerTheme } from './container';
import { outlinedStaticButtonIconTheme } from './icon';
import {
  outlinedStaticButtonLeadingIconTheme,
  outlinedStaticButtonTrailingIconTheme,
} from './sideIcons';
import { outlinedStaticButtonTextTheme } from './text';

export const partialOutlinedStaticButtonTheme: OptionalButtonVariantTheme = {
  [ButtonSubName.CONTAINER]: outlinedStaticButtonContainerTheme,
  [ButtonSubName.ICON]: outlinedStaticButtonIconTheme,
  [ButtonSubName.LEADING_ICON]: outlinedStaticButtonLeadingIconTheme,
  [ButtonSubName.TEXT]: outlinedStaticButtonTextTheme,
  [ButtonSubName.TRAILING_ICON]: outlinedStaticButtonTrailingIconTheme,
};

export const outlinedStaticButtonTheme: OptionalButtonVariantTheme = merge<
  {},
  OptionalButtonVariantTheme,
  OptionalButtonVariantTheme
>({}, containedStaticButtonTheme, partialOutlinedStaticButtonTheme);
