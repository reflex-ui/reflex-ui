import { ViewProps } from 'react-native';
import { ViewPropsGetter } from '../ViewPropsGetter';

export interface ViewTheme<P> {
  readonly getProps: ViewPropsGetter<P>;
  readonly props: ViewProps;
}

export interface OptionalViewTheme<P> {
  readonly getProps?: ViewPropsGetter<P>;
  readonly props?: ViewProps;
}
