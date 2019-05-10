/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ElevationProps } from '../../elevation';
import { InteractionStateProps } from '../../interaction';
import { RfxViewPropsBase } from '../view/RfxViewProps';
import { SurfaceTheme } from './SurfaceTheme';

export interface SurfacePropsBase<Props, Theme>
  extends RfxViewPropsBase<Props, Theme>,
    ElevationProps,
    InteractionStateProps {
  readonly activated?: boolean;
  /*
   * We cannot use 'readonly' here because it causes
   * a TypeScript error, since other react-native interfaces
   * (e.g. TouchableWithoutFeedbackProps) also declares disabled,
   * but without 'readonly', so if we want to extend such an interface
   * AND this one we get an error if this one has 'readonly'.
   * Example error:
   * [ts] Interface 'SomeComponentProps' cannot simultaneously
   * extend types 'InteractionProps' and 'SurfacePropsBase'.
   * Named property 'disabled' of types 'InteractionProps' and
   * 'SurfacePropsBase' are not identical. [2320]
   */
  disabled?: boolean;
  /**/
}

export type SurfacePropsBaseOptional<Props, Theme> = Partial<
  SurfacePropsBase<Props, Theme>
>;

export interface SurfaceProps
  extends SurfacePropsBase<SurfaceProps, SurfaceTheme> {}

export type SurfacePropsOptional = Partial<SurfaceProps>;
