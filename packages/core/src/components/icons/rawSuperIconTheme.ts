import { TextProps, ViewProps } from 'react-native';

import { getRawSizedTheme } from '../raw/getRawSizedTheme';
import { DefaultViewSubcomponent } from '../views/DefaultViewSubcomponent';
import { SuperIconProps } from './SuperIconProps';
import { SuperIconTheme } from './SuperIconTheme';

export const rawSuperIconTheme: SuperIconTheme = {
  container: {
    component: DefaultViewSubcomponent,
    ...getRawSizedTheme<SuperIconProps, ViewProps>(),
  },
  icon: getRawSizedTheme<SuperIconProps, TextProps>(),
};
