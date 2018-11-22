import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface Styled {
  readonly style?: StyleProp<TextStyle | ViewStyle>;
}
