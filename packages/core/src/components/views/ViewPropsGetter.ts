import { ViewProps } from 'react-native';

export type ViewPropsGetter<P> = (props: P) => ViewProps;
