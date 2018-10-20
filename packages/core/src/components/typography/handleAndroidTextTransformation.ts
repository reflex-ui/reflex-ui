import { StyleProp, StyleSheet, TextStyle } from 'react-native';
import { isAndroid } from '../../utils';
import { transformText } from './transformText';

export const handleAndroidTextTransformation = (
  text: string | undefined | null,
  style: StyleProp<TextStyle> | undefined | null,
): string | undefined | null => {
  if (!isAndroid || !text || !style) return text;

  return transformText({
    text,
    transformation: StyleSheet.flatten(style).textTransform,
  });
};
