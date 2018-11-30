export const getComponentDisplayName = <Props extends {}>(
  Component: React.ComponentType<Props>,
): string => Component.displayName || Component.name || 'Unknown';
