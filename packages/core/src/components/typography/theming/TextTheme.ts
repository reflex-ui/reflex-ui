import { TextProps } from 'react-native';
import { TextPropsGetter } from '../TextPropsGetter';

export interface TextTheme<P> {
  readonly getProps: TextPropsGetter<P>;
  readonly props: TextProps;
}

export interface OptionalTextTheme<P> {
  readonly getProps?: TextPropsGetter<P>;
  readonly props?: TextProps;
}
