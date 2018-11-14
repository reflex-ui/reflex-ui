import { ButtonSubName, OptionalButtonVariantTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { raisedStaticButtonTheme } from '../raised';
import { fabStaticButtonContainerTheme } from './container';
import { fabStaticButtonIconTheme } from './icon';

export const partialFabStaticButtonTheme: OptionalButtonVariantTheme = {
  [ButtonSubName.CONTAINER]: fabStaticButtonContainerTheme,
  [ButtonSubName.ICON]: fabStaticButtonIconTheme,
};

export const fabStaticButtonTheme: OptionalButtonVariantTheme = merge<
  {},
  OptionalButtonVariantTheme,
  OptionalButtonVariantTheme
>({}, raisedStaticButtonTheme, partialFabStaticButtonTheme);
