import { ViewProps } from 'react-native';

import { getRawSizedTheme } from '../raw/getRawSizedTheme';
import { DefaultViewSubcomponent } from '../views/DefaultViewSubcomponent';
import { SuperIconProps } from './SuperIconProps';
import { SuperIconTheme } from './SuperIconTheme';
import { TextIconProps } from './TextIconProps';

export const rawSuperIconTheme: SuperIconTheme = {
  container: {
    component: DefaultViewSubcomponent,
    ...getRawSizedTheme<SuperIconProps, ViewProps>(),
  },
  icon: getRawSizedTheme<SuperIconProps, TextIconProps>(),
};
