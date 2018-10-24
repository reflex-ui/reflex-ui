import {
  DefaultIconContainer,
  IconSubComponents,
  IconSubComponentsTheme,
  IconTheme,
} from './';

export const rawIconSubComponentsTheme: IconSubComponentsTheme = {
  container: {
    getProps: () => ({}),
    props: {},
  },
  icon: {
    getProps: () => ({}),
    props: {},
  },
};

export const rawIconSubComponents: IconSubComponents = {
  Container: DefaultIconContainer,
};

export const rawIconTheme: IconTheme = {
  allSizes: rawIconSubComponentsTheme,
  large: rawIconSubComponentsTheme,
  regular: rawIconSubComponentsTheme,
  small: rawIconSubComponentsTheme,
  subComponents: rawIconSubComponents,
  xlarge: rawIconSubComponentsTheme,
  xsmall: rawIconSubComponentsTheme,
};
