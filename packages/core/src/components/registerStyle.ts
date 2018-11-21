import { RegisteredStyle, StyleSheet } from 'react-native';
import { PrimitiveStyleObj } from './PrimitiveStyleObj';

export const registerStyle = <PrimitiveStyle extends {}>(
  style: PrimitiveStyle,
): RegisteredStyle<PrimitiveStyle> =>
  StyleSheet.create<PrimitiveStyleObj<PrimitiveStyle>>({ style }).style;
