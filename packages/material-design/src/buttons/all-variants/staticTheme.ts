import { OptionalButtonTheme } from '@reflex-ui/core';
import { allVariantsStaticButtonContainerTheme } from './container';
import { allVariantsStaticButtonIconTheme } from './icon';
import {
  allVariantsStaticButtonLeadingIconContainerTheme,
  allVariantsStaticButtonTrailingIconContainerTheme,
} from './sideIconContainers';
import {
  allVariantsStaticButtonLeadingIconTheme,
  allVariantsStaticButtonTrailingIconTheme,
} from './sideIcons';
import { allVariantsStaticButtonTextTheme } from './text';

export const allVariantsStaticButtonTheme: OptionalButtonTheme = {
  container: allVariantsStaticButtonContainerTheme,
  icon: allVariantsStaticButtonIconTheme,
  leadingIcon: allVariantsStaticButtonLeadingIconTheme,
  leadingIconContainer: allVariantsStaticButtonLeadingIconContainerTheme,
  text: allVariantsStaticButtonTextTheme,
  trailingIcon: allVariantsStaticButtonTrailingIconTheme,
  trailingIconContainer: allVariantsStaticButtonTrailingIconContainerTheme,
};
