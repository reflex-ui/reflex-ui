'use strict';

/*
 * Originally copied from:
 * https://github.com/necolas/react-native-web/issues/832#issue-299066591
 * Updated and modified to support Yarn Workspaces afterwards.
 */

const REACT_NATIVE_WEB_TYPINGS = `
//////////////////////////////////////////////////////////////////////////
//
//  START OF REACT-NATIVE-WEB TYPINGS
//
//////////////////////////////////////////////////////////////////////////
export interface ImageProperties {
    /**
     * When false, the image will not be draggable
     * @platform web
     */
    draggable?: boolean;
}

export interface TextInputProperties {
    /**
     * Indicates whether the value of the control can be automatically completed by the browser
     * @platform web
     */
    autoComplete?: string;
}

export interface TouchableWithoutFeedbackProps {
    onMouseEnter?: React.MouseEventHandler;
    onMouseLeave?: React.MouseEventHandler;
}

export interface SwitchProperties {
    /**
     * The color of the thumb grip when the switch is turned on.
     * @platform web
     */
    activeThumbColor?: string;
    /**
     * The color of the track when the switch is turned on.
     * @platform web
     */
    activeTrackColor?: string;
    /**
     * The color of the thumb grip when the switch is turned off.
     * @platform web
     */
    thumbColor?: string;
    /**
     * The color of the track when the switch is turned off.
     * @platform web
     */
    trackColor?: string;
}

export interface TextStyle {
    /** @platform web */
    fontFeatureSettings?: string;
    /** @platform web */
    MozOsxFontSmoothing?: string;
    /** @platform web */
    textIndent?: string;
    /** @platform web */
    textOverflow?: string;
    /** @platform web */
    textRendering?: string;
    /** @platform web */
    textTransform?: string;
    /** @platform web */
    unicodeBidi?: string;
    /** @platform web */
    WebkitFontSmoothing?: string;
    /** @platform web */
    whiteSpace?: string;
    /** @platform web */
    wordWrap?: string;
    /**
     * TextInput only!
     * @platform web
     */
    resize?: string;
}

export interface ViewStyle {
    /** @platform web */
    animationDelay?: string;
    /** @platform web */
    animationDirection?: string;
    /** @platform web */
    animationDuration?: string;
    /** @platform web */
    animationFillMode?: string;
    /** @platform web */
    animationName?: string | Array<Object>;
    /** @platform web */
    animationIterationCount?: number | "infinite";
    /** @platform web */
    animationPlayState?: string;
    /** @platform web */
    animationTimingFunction?: string;
    /** @platform web */
    backgroundAttachment?: string;
    /** @platform web */
    backgroundBlendMode?: string;
    /** @platform web */
    backgroundClip?: string;
    /** @platform web */
    backgroundImage?: string;
    /** @platform web */
    backgroundOrigin?: string;
    /** @platform web */
    backgroundPosition?: string;
    /** @platform web */
    backgroundRepeat?: string;
    /** @platform web */
    backgroundSize?: string;
    /** @platform web */
    boxShadow?: string;
    /** @platform web */
    boxSizing?: string;
    /** @platform web */
    clip?: string;
    /** @platform web */
    cursor?: string;
    /** @platform web */
    filter?: string;
    /** @platform web */
    gridAutoColumns?: string;
    /** @platform web */
    gridAutoFlow?: string;
    /** @platform web */
    gridAutoRows?: string;
    /** @platform web */
    gridColumnEnd?: string;
    /** @platform web */
    gridColumnGap?: string;
    /** @platform web */
    gridColumnStart?: string;
    /** @platform web */
    gridRowEnd?: string;
    /** @platform web */
    gridRowGap?: string;
    /** @platform web */
    gridRowStart?: string;
    /** @platform web */
    gridTemplateColumns?: string;
    /** @platform web */
    gridTemplateRows?: string;
    /** @platform web */
    gridTemplateAreas?: string;
    /** @platform web */
    outline?: string;
    /** @platform web */
    outlineColor?: string;
    /** @platform web */
    overflowX?: string;
    /** @platform web */
    overflowY?: string;
    /** @platform web */
    overscrollBehavior?: "auto" | "contain" | "none";
    /** @platform web */
    overscrollBehaviorX?: "auto" | "contain" | "none";
    /** @platform web */
    overscrollBehaviorY?: "auto" | "contain" | "none";
    /** @platform web */
    perspective?: string;
    /** @platform web */
    perspectiveOrigin?: string;
    /** @platform web */
    touchAction?: string;
    /** @platform web */
    transformOrigin?: string;
    /** @platform web */
    transitionDelay?: string;
    /** @platform web */
    transitionDuration?: string;
    /** @platform web */
    transitionProperty?: string;
    /** @platform web */
    transitionTimingFunction?: string;
    /** @platform web */
    userSelect?: string
    /** @platform web */
    visibility?: string;
    /** @platform web */
    willChange?: string;
}

export interface TextProperties {
    /**
     * Allows assistive technologies to present and support interaction with the view in a manner that is consistent with user expectations for similar views of that type. For example, marking a touchable view with an accessibilityRole of button. For compatibility with React Native accessibilityTraits and accessibilityComponentType are mapped to accessibilityRole. (This is implemented using ARIA roles.)
     * @platform web
     */
    accessibilityRole?: 'button' | 'heading' | 'label' | 'link' | 'listitem';
}

export interface CheckBoxProps extends ViewProperties {
    /**
     * Invoked with the event when the value changes.
     * @platform web
     */
    onChange?: Function;
    /**
     * Invoked with the new value when the value changes.
     * @platform web
     */
    onValueChange?: Function;
    /**
     * The value of the checkbox. If \`true\` the checkbox will be checked.
     * @platform web
     */
    value?: boolean;
    /**
     * If true, the user won't be able to interact with the checkbox.
     * @platform web
     */
    disabled?: boolean;
    /**
     * Customize the color of the checkbox.
     * @platform web
     */
    color?: string;
}

export interface CheckBoxStatic extends React.ComponentClass<CheckBoxProps> {}
export type CheckBox = CheckBoxStatic;

//////////////////////////////////////////////////////////////////////////
//
//  END OF REACT-NATIVE-WEB TYPINGS
//
//////////////////////////////////////////////////////////////////////////`;

const fs = require('fs');
const path = require('path');

/*
 * Support Yarn Workspaces.
 */
const isDirectory = source => fs.lstatSync(source).isDirectory();

const getDirectories = source =>
  fs
    .readdirSync(source)
    .map(name => path.join(source, name))
    .filter(isDirectory);

const modulesDirs = [path.resolve(__dirname, '../')];
const packageObj = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
let workspacePackages = [];

if (Array.isArray(packageObj.workspaces)) {
  workspacePackages = [].concat(packageObj.workspaces);
} else if (
  packageObj.workspaces &&
  Array.isArray(packageObj.workspaces.packages)
) {
  workspacePackages = [].concat(packageObj.workspaces.packages);
}

if (workspacePackages.length > 0) {
  workspacePackages = workspacePackages.map(e => {
    const slashIndex = e.lastIndexOf('/');
    const endIndex = slashIndex === -1 ? e.length : slashIndex;

    return path.resolve(__dirname, `../${e.substring(0, endIndex)}/`);
  });

  workspacePackages.slice().forEach((e, index) => {
    workspacePackages = workspacePackages.concat(
      getDirectories(workspacePackages[index]),
    );
  });
}
/**/

modulesDirs.concat(workspacePackages).forEach(e => {
  const rnTsdFile = path.resolve(
    e,
    'node_modules/@types/react-native/index.d.ts',
  );

  if (!fs.existsSync(rnTsdFile)) return;

  const raw = fs.readFileSync(rnTsdFile);

  /* Fix @types/node conflict
   * @see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/15960
   * @see https://gist.github.com/rawrmaan/be47e71bd0df3f7493ead6cefd6b400c
   */
  fs.writeFileSync(
    rnTsdFile,
    raw
      .toString()
      .replace('declare global', 'declare namespace RemovedGlobals'),
  );
  /**/

  if (raw.includes('REACT-NATIVE-WEB TYPINGS')) return;

  fs.appendFileSync(rnTsdFile, REACT_NATIVE_WEB_TYPINGS);
});
