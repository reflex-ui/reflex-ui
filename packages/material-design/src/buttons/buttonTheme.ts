import {
  ButtonTheme,
  OptionalButtonTheme,
  rawButtonTheme,
} from '@reflex-ui/core';
import merge from 'lodash/merge';
import {
  allVariantsButtonTheme,
  containedButtonTheme,
  defaultButtonTheme,
  outlinedButtonTheme,
  raisedButtonTheme,
} from './';

const optionalButtonTheme: OptionalButtonTheme = {
  allVariants: allVariantsButtonTheme,
  contained: containedButtonTheme,
  containedRaised: raisedButtonTheme,
  default: defaultButtonTheme,
  outlined: outlinedButtonTheme,
};

export const buttonTheme: ButtonTheme = merge<
  {},
  ButtonTheme,
  OptionalButtonTheme
>({}, rawButtonTheme, optionalButtonTheme);
