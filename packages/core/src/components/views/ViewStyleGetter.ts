import { ViewStyle } from 'react-native';

export type ViewStyleGetter<P> = (props: P) => ViewStyle;
