import { StyleProp } from 'react-native';

export interface StyledPrimitiveProps<PrimitiveStyle> {
  readonly style?: StyleProp<PrimitiveStyle>;
}
