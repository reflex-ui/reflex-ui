interface IConfig {
  app: {
    name: string;
  };
  web: {
    root: string;
  };
}

export const config: IConfig = {
  app: {
    name: 'example',
  },
  web: {
    root: 'root',
  },
};
