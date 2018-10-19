import * as React from 'react';
import { TouchableWithoutFeedbackProps } from 'react-native';

export type Touchable<
  T extends TouchableWithoutFeedbackProps
> = React.ComponentType<T>;
