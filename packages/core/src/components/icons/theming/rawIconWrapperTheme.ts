import { ViewProps } from 'react-native';

import { getRawSizedTheme } from '../../../theming/getRawSizedTheme';
import { DefaultViewSubcomponent } from '../../views/DefaultViewSubcomponent';
import { IconWrapperProps } from '../IconWrapperProps';
import { IconWrapperSubcomponents } from '../IconWrapperSubcomponents';
import { IconWrapperSubName } from '../IconWrapperSubName';
import { TextIconProps } from '../TextIconProps';
import { IconWrapperTheme } from './IconWrapperTheme';

export const rawIconWrapperSubcomponents: IconWrapperSubcomponents = {
  Container: DefaultViewSubcomponent,
};

export const rawIconWrapperTheme: IconWrapperTheme = {
  // prettier-ignore
  // tslint:disable-next-line:max-line-length
  [IconWrapperSubName.CONTAINER]: getRawSizedTheme<IconWrapperProps, ViewProps>(),
  // prettier-ignore
  // tslint:disable-next-line:max-line-length
  [IconWrapperSubName.ICON]: getRawSizedTheme<IconWrapperProps, TextIconProps>(),
  subcomponents: rawIconWrapperSubcomponents,
};
