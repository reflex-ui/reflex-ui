import {
  TextProps,
  TouchableWithoutFeedbackProps,
  ViewProps,
} from 'react-native';

import { SubProps } from '../SubProps';
import { ButtonProps } from './ButtonProps';
import { ButtonSubName } from './ButtonSubName';

export interface ButtonSubcomponents {
  readonly [ButtonSubName.CONTAINER]: React.ComponentType<
    SubProps<ButtonProps> & ViewProps
  >;
  readonly [ButtonSubName.ICON_CONTAINER]: React.ComponentType<
    SubProps<ButtonProps> & ViewProps
  >;
  readonly [ButtonSubName.LEADING_ICON_CONTAINER]: React.ComponentType<
    SubProps<ButtonProps> & ViewProps
  >;
  readonly [ButtonSubName.TEXT]: React.ComponentType<
    SubProps<ButtonProps> & TextProps
  >;
  readonly [ButtonSubName.TOUCHABLE]: React.ComponentType<
    SubProps<ButtonProps> & TouchableWithoutFeedbackProps
  >;
  readonly [ButtonSubName.TRAILING_ICON_CONTAINER]: React.ComponentType<
    SubProps<ButtonProps> & ViewProps
  >;
}

export interface OptionalButtonSubcomponents {
  readonly [ButtonSubName.CONTAINER]?: React.ComponentType<
    SubProps<ButtonProps> & ViewProps
  >;
  readonly [ButtonSubName.ICON_CONTAINER]?: React.ComponentType<
    SubProps<ButtonProps> & ViewProps
  >;
  readonly [ButtonSubName.LEADING_ICON_CONTAINER]?: React.ComponentType<
    SubProps<ButtonProps> & ViewProps
  >;
  readonly [ButtonSubName.TEXT]?: React.ComponentType<
    SubProps<ButtonProps> & TextProps
  >;
  readonly [ButtonSubName.TOUCHABLE]?: React.ComponentType<
    SubProps<ButtonProps> & TouchableWithoutFeedbackProps
  >;
  readonly [ButtonSubName.TRAILING_ICON_CONTAINER]?: React.ComponentType<
    SubProps<ButtonProps> & ViewProps
  >;
}
