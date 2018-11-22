import { RegisteredStyle } from 'react-native';

export type RegisteredStyleFactory<P> = (
  style: P,
) => { readonly style: RegisteredStyle<P> };
