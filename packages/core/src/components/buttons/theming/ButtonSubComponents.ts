import {
  TextProps,
  TouchableWithoutFeedbackProps,
  ViewProps,
} from 'react-native';

import { ReflexSubcomponent } from '../../ReflexSubcomponent';
import { ButtonProps } from '../ButtonProps';

export interface ButtonSubComponents {
  readonly LeftIconContainer: React.ComponentType<
    ReflexSubcomponent<ButtonProps> & ViewProps
  >;
  readonly Text: React.ComponentType<
    ReflexSubcomponent<ButtonProps> & TextProps
  >;
  readonly Touchable: React.ComponentType<
    ReflexSubcomponent<ButtonProps> & TouchableWithoutFeedbackProps
  >;
  readonly View: React.ComponentType<
    ReflexSubcomponent<ButtonProps> & ViewProps
  >;
}

export interface OptionalButtonSubComponents {
  readonly LeftIconContainer?: React.ComponentType<
    ReflexSubcomponent<ButtonProps> & ViewProps
  >;
  readonly Text?: React.ComponentType<
    ReflexSubcomponent<ButtonProps> & TextProps
  >;
  readonly Touchable?: React.ComponentType<
    ReflexSubcomponent<ButtonProps> & TouchableWithoutFeedbackProps
  >;
  readonly View?: React.ComponentType<
    ReflexSubcomponent<ButtonProps> & ViewProps
  >;
}
