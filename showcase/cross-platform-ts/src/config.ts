interface Config {
  app: {
    name: string;
  };
  web: {
    root: string;
  };
}

export const config: Config = {
  app: {
    name: 'example',
  },
  web: {
    root: 'root',
  },
};
