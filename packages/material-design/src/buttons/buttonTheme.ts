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
  xfabButtonTheme,
} from './';

const optionalButtonTheme: OptionalButtonTheme = {
  allVariants: allVariantsButtonTheme,
  contained: containedButtonTheme,
  containedRaised: raisedButtonTheme,
  default: defaultButtonTheme,
  fab: fabButtonTheme,
  outlined: outlinedButtonTheme,
  xfab: xfabButtonTheme,
};

export const buttonTheme: ButtonTheme = merge<
  {},
  ButtonTheme,
  OptionalButtonTheme
>({}, rawButtonTheme, optionalButtonTheme);
