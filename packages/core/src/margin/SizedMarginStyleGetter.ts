import { ViewStyleGetter } from '../components/views';
import { MarginProps } from './MarginProps';
import { SizedMarginStyle } from './SizedMarginStyle';

export type SizedMarginStyleGetter = (
  style: SizedMarginStyle,
) => ViewStyleGetter<MarginProps>;
