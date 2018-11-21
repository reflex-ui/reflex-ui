import { ViewProps } from 'react-native';

import { getRawSizedTheme } from '../../../theming/getRawSizedTheme';
import { IconSubName } from '../IconSubName';
import { IconWrapperProps } from '../IconWrapperProps';
import { TextIconProps } from '../TextIconProps';
import { DefaultIconContainer, IconSubComponents, IconTheme } from './';

export const rawIconSubComponents: IconSubComponents = {
  Container: DefaultIconContainer,
};

export const rawIconTheme: IconTheme = {
  [IconSubName.CONTAINER]: getRawSizedTheme<IconWrapperProps, ViewProps>(),
  [IconSubName.ICON]: getRawSizedTheme<IconWrapperProps, TextIconProps>(),
  subComponents: rawIconSubComponents,
};
