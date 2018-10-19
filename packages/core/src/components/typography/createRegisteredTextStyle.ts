import { StyleSheet, TextStyle } from 'react-native';
import { RegisteredStyleFactory } from '../RegisteredStyleFactory';
import { TextStyleObj } from './TextStyleObj';

export const createRegisteredTextStyle: RegisteredStyleFactory<
  TextStyle
> = style =>
  StyleSheet.create<TextStyleObj>({
    style,
  });
