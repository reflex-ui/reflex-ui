import {
  TextProps,
  TouchableWithoutFeedbackProps,
  ViewProps,
} from 'react-native';

import { ReflexSubcomponent } from '../ReflexSubcomponent';
import { ButtonProps } from './ButtonProps';
import { ButtonSubName } from './ButtonSubName';

export interface ButtonSubComponents {
  readonly [ButtonSubName.CONTAINER]: React.ComponentType<
    ReflexSubcomponent<ButtonProps> & ViewProps
  >;
  readonly [ButtonSubName.ICON_CONTAINER]: React.ComponentType<
    ReflexSubcomponent<ButtonProps> & ViewProps
  >;
  readonly [ButtonSubName.LEADING_ICON_CONTAINER]: React.ComponentType<
    ReflexSubcomponent<ButtonProps> & ViewProps
  >;
  readonly [ButtonSubName.TEXT]: React.ComponentType<
    ReflexSubcomponent<ButtonProps> & TextProps
  >;
  readonly [ButtonSubName.TOUCHABLE]: React.ComponentType<
    ReflexSubcomponent<ButtonProps> & TouchableWithoutFeedbackProps
  >;
  readonly [ButtonSubName.TRAILING_ICON_CONTAINER]: React.ComponentType<
    ReflexSubcomponent<ButtonProps> & ViewProps
  >;
}

export interface OptionalButtonSubComponents {
  readonly [ButtonSubName.CONTAINER]?: React.ComponentType<
    ReflexSubcomponent<ButtonProps> & ViewProps
  >;
  readonly [ButtonSubName.ICON_CONTAINER]?: React.ComponentType<
    ReflexSubcomponent<ButtonProps> & ViewProps
  >;
  readonly [ButtonSubName.LEADING_ICON_CONTAINER]?: React.ComponentType<
    ReflexSubcomponent<ButtonProps> & ViewProps
  >;
  readonly [ButtonSubName.TEXT]?: React.ComponentType<
    ReflexSubcomponent<ButtonProps> & TextProps
  >;
  readonly [ButtonSubName.TOUCHABLE]?: React.ComponentType<
    ReflexSubcomponent<ButtonProps> & TouchableWithoutFeedbackProps
  >;
  readonly [ButtonSubName.TRAILING_ICON_CONTAINER]?: React.ComponentType<
    ReflexSubcomponent<ButtonProps> & ViewProps
  >;
}
