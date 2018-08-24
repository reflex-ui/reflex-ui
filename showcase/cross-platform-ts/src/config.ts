interface IConfig {
  app: {
    name: string;
  };
  web: {
    root: string;
  };
}

const config: IConfig = {
  app: {
    name: 'example',
  },
  web: {
    root: 'root',
  },
};

export default config;
