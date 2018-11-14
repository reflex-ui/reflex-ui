import { ButtonSubName, OptionalButtonVariantTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { containedStaticButtonTheme } from '../contained';
import { raisedStaticButtonContainerTheme } from './container';

export const partialRaisedStaticButtonTheme: OptionalButtonVariantTheme = {
  [ButtonSubName.CONTAINER]: raisedStaticButtonContainerTheme,
};

export const raisedStaticButtonTheme: OptionalButtonVariantTheme = merge<
  {},
  OptionalButtonVariantTheme,
  OptionalButtonVariantTheme
>({}, containedStaticButtonTheme, partialRaisedStaticButtonTheme);
