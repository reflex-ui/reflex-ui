import { SubPropsGetter } from '../subcomponents/SubPropsGetter';
import { SuperIconProps } from './SuperIconProps';
import { SuperIconSubProps } from './SuperIconSubProps';

export type SuperIconSubPropsGetter = SubPropsGetter<
  SuperIconProps,
  SuperIconSubProps
>;
