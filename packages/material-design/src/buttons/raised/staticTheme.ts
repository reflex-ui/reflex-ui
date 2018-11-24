import { ButtonSubName, OptionalButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { containedStaticButtonTheme } from '../contained';
import { raisedStaticButtonContainerTheme } from './container';

export const partialRaisedStaticButtonTheme: OptionalButtonTheme = {
  [ButtonSubName.CONTAINER]: raisedStaticButtonContainerTheme,
};

export const raisedStaticButtonTheme: OptionalButtonTheme = merge<
  {},
  OptionalButtonTheme,
  OptionalButtonTheme
>({}, containedStaticButtonTheme, partialRaisedStaticButtonTheme);
