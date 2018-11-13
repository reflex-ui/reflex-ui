import { TouchableWithoutFeedbackProps } from 'react-native';
import { TouchablePropsGetter } from '../TouchablePropsGetter';

export interface TouchableTheme<P> {
  readonly getProps: TouchablePropsGetter<P>;
  readonly props: TouchableWithoutFeedbackProps;
}

export interface OptionalTouchableTheme<P> {
  readonly getProps?: TouchablePropsGetter<P>;
  readonly props?: TouchableWithoutFeedbackProps;
}
