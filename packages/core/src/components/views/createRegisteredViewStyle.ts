import { StyleSheet, ViewStyle } from 'react-native';
import { RegisteredStyleFactory } from '../../RegisteredStyleFactory';
import { ViewStyleObj } from './ViewStyleObj';

export const createRegisteredViewStyle: RegisteredStyleFactory<
  ViewStyle
> = style =>
  StyleSheet.create<ViewStyleObj>({
    style,
  });
