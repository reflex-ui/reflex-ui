import { ButtonSubName, OptionalButtonVariantTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { containedStaticButtonTheme } from '../contained/staticTheme';
import {
  defaultStaticButtonLeadingIconTheme,
  defaultStaticButtonTrailingIconTheme,
} from '../default/sideIcons';
import { outlinedStaticButtonContainerTheme } from './container';
import { outlinedStaticButtonTextTheme } from './text';

export const partialOutlinedStaticButtonTheme: OptionalButtonVariantTheme = {
  [ButtonSubName.CONTAINER]: outlinedStaticButtonContainerTheme,
  [ButtonSubName.LEADING_ICON]: defaultStaticButtonLeadingIconTheme,
  [ButtonSubName.TEXT]: outlinedStaticButtonTextTheme,
  [ButtonSubName.TRAILING_ICON]: defaultStaticButtonTrailingIconTheme,
};

export const outlinedStaticButtonTheme: OptionalButtonVariantTheme = merge<
  {},
  OptionalButtonVariantTheme,
  OptionalButtonVariantTheme
>({}, containedStaticButtonTheme, partialOutlinedStaticButtonTheme);
