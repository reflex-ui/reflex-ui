import { createComponentDisplayName, getComponentDisplayName } from '../utils/';

export interface ReflexComponentConfig {
  name?: string;
  // tslint:disable-next-line:no-any we don't care which type is this here.
  wrapped?: React.ComponentType<any>;
}

export const reflexComponent = <Props extends {}>(
  config?: ReflexComponentConfig,
) => (Component: React.ComponentType<Props>): React.ComponentType<Props> => {
  const target = config && config.name ? config.name : Component;
  let name: string = createComponentDisplayName(target);

  if (config && config.wrapped) {
    name = `${name}(${getComponentDisplayName(config.wrapped)})`;
  }

  Component.displayName = name;
  return Component;
};
