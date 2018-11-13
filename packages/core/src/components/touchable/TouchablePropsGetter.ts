import { TouchableWithoutFeedbackProps } from 'react-native';

export type TouchablePropsGetter<P> = (
  props: P,
) => TouchableWithoutFeedbackProps;
