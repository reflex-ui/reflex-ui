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
  fabButtonTheme,
  outlinedButtonTheme,
  raisedButtonTheme,
} from './';

const optionalButtonTheme: OptionalButtonTheme = {
  allVariants: allVariantsButtonTheme,
  contained: containedButtonTheme,
  containedRaised: raisedButtonTheme,
  default: defaultButtonTheme,
  fab: fabButtonTheme,
  outlined: outlinedButtonTheme,
};

export const buttonTheme: ButtonTheme = merge<
  {},
  ButtonTheme,
  OptionalButtonTheme
>({}, rawButtonTheme, optionalButtonTheme);
