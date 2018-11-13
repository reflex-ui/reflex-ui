import { StyleSheet } from 'react-native';
import { PrimitiveStyleObj } from './PrimitiveStyleObj';

export const createRegisteredStyle = <PrimitiveStyle>(style: PrimitiveStyle) =>
  StyleSheet.create<PrimitiveStyleObj<PrimitiveStyle>>({ style });
