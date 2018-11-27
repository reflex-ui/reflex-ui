import { ViewProps } from 'react-native';

import { getRawSizedTheme } from '../raw/getRawSizedTheme';
import { DefaultViewSubcomponent } from '../views/DefaultViewSubcomponent';
import { IconWrapperProps } from './IconWrapperProps';
import { IconWrapperTheme } from './IconWrapperTheme';
import { TextIconProps } from './TextIconProps';

export const rawIconWrapperTheme: IconWrapperTheme = {
  container: {
    component: DefaultViewSubcomponent,
    ...getRawSizedTheme<IconWrapperProps, ViewProps>(),
  },
  icon: getRawSizedTheme<IconWrapperProps, TextIconProps>(),
};
