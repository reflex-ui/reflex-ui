import {
  TextProps,
  TouchableWithoutFeedbackProps,
  ViewProps,
} from 'react-native';

import { ReflexSubcomponent } from '../../ReflexSubcomponent';
import { ButtonProps } from '../ButtonProps';

export interface ButtonSubComponents {
  readonly Container: React.ComponentType<
    ReflexSubcomponent<ButtonProps> & ViewProps
  >;
  readonly LeftIconContainer: React.ComponentType<
    ReflexSubcomponent<ButtonProps> & ViewProps
  >;
  readonly RightIconContainer: React.ComponentType<
    ReflexSubcomponent<ButtonProps> & ViewProps
  >;
  readonly Text: React.ComponentType<
    ReflexSubcomponent<ButtonProps> & TextProps
  >;
  readonly Touchable: React.ComponentType<
    ReflexSubcomponent<ButtonProps> & TouchableWithoutFeedbackProps
  >;
}

export interface OptionalButtonSubComponents {
  readonly Container?: React.ComponentType<
    ReflexSubcomponent<ButtonProps> & ViewProps
  >;
  readonly LeftIconContainer?: React.ComponentType<
    ReflexSubcomponent<ButtonProps> & ViewProps
  >;
  readonly RightIconContainer?: React.ComponentType<
    ReflexSubcomponent<ButtonProps> & ViewProps
  >;
  readonly Text?: React.ComponentType<
    ReflexSubcomponent<ButtonProps> & TextProps
  >;
  readonly Touchable?: React.ComponentType<
    ReflexSubcomponent<ButtonProps> & TouchableWithoutFeedbackProps
  >;
}
