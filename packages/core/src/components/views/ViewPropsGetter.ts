import { ViewProps } from 'react-native';
import { PrimitivePropsGetter } from '../PrimitivePropsGetter';

export type ViewPropsGetter<Props> = PrimitivePropsGetter<Props, ViewProps>;
