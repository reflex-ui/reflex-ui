import { ViewStyle } from 'react-native';

const totalElevation: number = 24;
const elevationStyles: { [key: number]: ViewStyle } = {};
let x: number = 0;
while (x < totalElevation) {
  elevationStyles[x] = { elevation: x };
  x += 1;
}

export { elevationStyles };
