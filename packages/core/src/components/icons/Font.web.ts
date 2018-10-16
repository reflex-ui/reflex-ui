// @ts-ignore
// tslint:disable-next-line
import iconFont from 'react-native-vector-icons/Fonts/MaterialIcons.ttf';

const iconFontStyles = `@font-face {
  src: url(${iconFont});
  font-family: MaterialIcons;
}`;

const style = document.createElement('style');
style.type = 'text/css';

style.appendChild(document.createTextNode(iconFontStyles));

document.head.appendChild(style);
