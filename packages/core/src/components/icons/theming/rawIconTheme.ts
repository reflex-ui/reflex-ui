import { ViewProps } from 'react-native';

import { getRawSizedTheme } from '../../../theming/getRawSizedTheme';
import { DefaultViewSubcomponent } from '../../views/DefaultViewSubcomponent';
import { IconSubComponents } from '../IconSubComponents';
import { IconSubName } from '../IconSubName';
import { IconWrapperProps } from '../IconWrapperProps';
import { TextIconProps } from '../TextIconProps';
import { IconTheme } from './IconTheme';

export const rawIconSubComponents: IconSubComponents = {
  Container: DefaultViewSubcomponent,
};

export const rawIconTheme: IconTheme = {
  [IconSubName.CONTAINER]: getRawSizedTheme<IconWrapperProps, ViewProps>(),
  [IconSubName.ICON]: getRawSizedTheme<IconWrapperProps, TextIconProps>(),
  subComponents: rawIconSubComponents,
};
