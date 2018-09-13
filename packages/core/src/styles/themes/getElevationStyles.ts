import { Platform, ViewStyle } from 'react-native';
import { InteractivityState } from '../../interactivity';

const androidShadows: { [key: string]: number } = {};
androidShadows[InteractivityState.DISABLED] = 0;
androidShadows[InteractivityState.ENABLED] = 2;
androidShadows[InteractivityState.FOCUSED] = 4;
/*
 * No hover state on native Android.
 */
// androidShadows[InteractivityState.HOVERED] = 0;
/**/
androidShadows[InteractivityState.PRESSED] = 8;

const iosShadows: { [key: string]: ViewStyle } = {};
// iosShadows[InteractivityState.DISABLED] = {};
iosShadows[InteractivityState.DISABLED] = {
  shadowColor: '#000000',
  shadowOffset: { height: 0, width: 0 },
  shadowOpacity: 0,
  shadowRadius: 0,
};
iosShadows[InteractivityState.ENABLED] = {
  shadowColor: '#000000',
  shadowOffset: { height: 1.6, width: 0 },
  shadowOpacity: 0.2,
  shadowRadius: 1,
};
iosShadows[InteractivityState.FOCUSED] = {
  shadowColor: '#000000',
  shadowOffset: { height: 3.4, width: 0 },
  shadowOpacity: 0.2,
  shadowRadius: 3,
};
/*
 * No hover state on native iOS.
 */
// iosShadows[InteractivityState.HOVERED] = {};
/**/
iosShadows[InteractivityState.PRESSED] = {
  shadowColor: '#000000',
  shadowOffset: { height: 5, width: 0 },
  shadowOpacity: 0.2,
  shadowRadius: 5,
};

const webShadows: { [key: string]: string } = {};
webShadows[InteractivityState.DISABLED] =
  '0 0 0 0 rgba(0,0,0,0), 0 0 0 0 rgba(0,0,0,0), 0 0 0 0 rgba(0,0,0,0)';
webShadows[InteractivityState.ENABLED] = `0 3px 1px -2px rgba(0,0,0,.2),
  0 2px 2px 0 rgba(0,0,0,.14),
  0 1px 5px 0 rgba(0,0,0,.12)`;
webShadows[InteractivityState.HOVERED] = `0px 2px 4px -1px rgba(0,0,0,.2),
  0px 4px 5px 0px rgba(0,0,0,.14),
  0px 1px 10px 0px rgba(0,0,0,.12)`;
webShadows[InteractivityState.FOCUSED] = webShadows[InteractivityState.HOVERED];
webShadows[InteractivityState.PRESSED] = `0px 5px 5px -3px rgba(0,0,0,.2),
  0px 8px 10px 1px rgba(0,0,0,.14),
  0px 3px 14px 2px rgba(0,0,0,.12)`;

interface ElevationStylesGetterData {
  readonly interactivityState: InteractivityState;
}

type ElevationStylesGetter = (props: ElevationStylesGetterData) => ViewStyle;

export const getElevationStyles: ElevationStylesGetter = ({
  interactivityState = InteractivityState.ENABLED,
}) => ({
  ...Platform.select({
    android: {
      elevation: androidShadows[interactivityState],
    },
    ios: { ...iosShadows[interactivityState] },
    web: {
      boxShadow: webShadows[interactivityState],
    },
  }),
});
