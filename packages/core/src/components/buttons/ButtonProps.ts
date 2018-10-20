import { InteractivityProps } from '../../interactivity/InteractivityProps';
import {
  OptionalSpecialButtonProps,
  SpecialButtonProps,
} from './SpecialButtonProps';

export interface ButtonProps extends SpecialButtonProps, InteractivityProps {}

export interface OptionalButtonProps
  extends OptionalSpecialButtonProps,
    InteractivityProps {}
