import { SubcomponentPropsGetter } from '../SubcomponentPropsGetter';
import { ButtonProps } from './ButtonProps';
import { ButtonSubProps } from './ButtonSubProps';

export type ButtonSubPropsGetter = SubcomponentPropsGetter<
  ButtonProps,
  ButtonSubProps
>;
