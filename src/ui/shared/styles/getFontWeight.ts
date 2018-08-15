import { isAndroid, isIOS } from '../utils';

export enum FontWeight {
  WEIGHT_LIGHT,
  WEIGHT_REGULAR,
  WEIGHT_MEDIUM,
  WEIGHT_BOLD,
}

type FontWeightValues =
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
androidWeight[FontWeight.WEIGHT_LIGHT] = '300';
androidWeight[FontWeight.WEIGHT_REGULAR] = '400';
androidWeight[FontWeight.WEIGHT_MEDIUM] = '500';
androidWeight[FontWeight.WEIGHT_BOLD] = '700';

const iosWeight: FontWeightValues[] = [];
iosWeight[FontWeight.WEIGHT_LIGHT] = '300';
iosWeight[FontWeight.WEIGHT_REGULAR] = '400';
iosWeight[FontWeight.WEIGHT_MEDIUM] = '500';
iosWeight[FontWeight.WEIGHT_BOLD] = '700';

const webWeight: FontWeightValues[] = [];
webWeight[FontWeight.WEIGHT_LIGHT] = '400';
webWeight[FontWeight.WEIGHT_REGULAR] = '500';
webWeight[FontWeight.WEIGHT_MEDIUM] = '700';
webWeight[FontWeight.WEIGHT_BOLD] = '900';

const getFontWeight = (weight: FontWeight): FontWeightValues => {
  if (isAndroid) return androidWeight[weight];
  if (isIOS) return iosWeight[weight];
  return webWeight[weight];
};

export default getFontWeight;
