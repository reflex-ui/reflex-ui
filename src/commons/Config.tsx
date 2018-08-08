interface IConfig {
  app: {
    name: string;
  };
  web: {
    root: string;
  };
}

const Config: IConfig = {
  app: {
    name: "example"
  },
  web: {
    root: "root"
  }
};

export default Config;
