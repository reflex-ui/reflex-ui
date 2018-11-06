import { RegisteredStyle } from 'react-native';

export type RegisteredStyleFactory<P> = (
  style: P,
) => { style: RegisteredStyle<P> };
