import { isAndroid, isIOS } from '../utils';

export enum FontWeight {
  LIGHT,
  REGULAR,
  MEDIUM,
  BOLD,
}

export type FontWeightValues =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

const androidWeight: FontWeightValues[] = [];
androidWeight[FontWeight.LIGHT] = '300';
androidWeight[FontWeight.REGULAR] = '400';
androidWeight[FontWeight.MEDIUM] = '500';
androidWeight[FontWeight.BOLD] = '700';

const iosWeight: FontWeightValues[] = [];
iosWeight[FontWeight.LIGHT] = '300';
iosWeight[FontWeight.REGULAR] = '400';
iosWeight[FontWeight.MEDIUM] = '500';
iosWeight[FontWeight.BOLD] = '700';

const webWeight: FontWeightValues[] = [];
webWeight[FontWeight.LIGHT] = '400';
webWeight[FontWeight.REGULAR] = '500';
webWeight[FontWeight.MEDIUM] = '700';
webWeight[FontWeight.BOLD] = '900';

const getFontWeight = (weight: FontWeight): FontWeightValues => {
  if (isAndroid) return androidWeight[weight];
  if (isIOS) return iosWeight[weight];
  return webWeight[weight];
};

export default getFontWeight;
