import { ButtonSubName, OptionalButtonVariantTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { defaultStaticButtonTheme } from '../default/staticTheme';
import { iconStaticButtonContainerTheme } from './container';
import { iconStaticButtonIconTheme } from './icon';

export const partialStaticIconButtonTheme: OptionalButtonVariantTheme = {
  [ButtonSubName.CONTAINER]: iconStaticButtonContainerTheme,
  [ButtonSubName.ICON]: iconStaticButtonIconTheme,
};

export const iconStaticButtonTheme: OptionalButtonVariantTheme = merge<
  {},
  OptionalButtonVariantTheme,
  OptionalButtonVariantTheme
>({}, defaultStaticButtonTheme, partialStaticIconButtonTheme);
