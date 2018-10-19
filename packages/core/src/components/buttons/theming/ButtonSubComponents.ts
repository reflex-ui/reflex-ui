import {
  TextProps,
  TouchableWithoutFeedbackProps,
  ViewProps,
} from 'react-native';

import { SpecialButtonProps } from '../';
import { Touchable } from '../../';

export interface ButtonSubComponents {
  readonly LeftIconContainer: React.ComponentType<
    SpecialButtonProps & ViewProps
  >;
  readonly Text: React.ComponentType<SpecialButtonProps & TextProps>;
  readonly Touchable: Touchable<TouchableWithoutFeedbackProps>;
  readonly View: React.ComponentType<SpecialButtonProps & ViewProps>;
}

export interface OptionalButtonSubComponents {
  readonly LeftIconContainer?: React.ComponentType<
    SpecialButtonProps & ViewProps
  >;
  readonly Text?: React.ComponentType<SpecialButtonProps & TextProps>;
  readonly Touchable?: Touchable<TouchableWithoutFeedbackProps>;
  readonly View?: React.ComponentType<SpecialButtonProps & ViewProps>;
}
