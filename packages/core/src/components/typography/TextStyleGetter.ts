import { TextStyle } from 'react-native';

export type TextStyleGetter<P> = (props: P) => TextStyle;
