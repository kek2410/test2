const getFiles = require.context("./languages", true, /\.ts$/);

const getModules = getFiles
  .keys()
  .reduce((modules: any, modulePath: any): any => {
    let moduleName: any = modulePath;
    moduleName = moduleName.replace(/^\.\/(.*)\.\w+$/, "$1");
    moduleName = moduleName.replace("/index", "");
    const value: any = getFiles(modulePath);
    modules[moduleName] = value.default;
    return modules;
  }, {});

export default getModules;
