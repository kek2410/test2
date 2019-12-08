const getFiles = require.context("./children", true, /\.ts$/);

// import mypage from "./children/mypage";

const result = getFiles.keys().reduce((mod: any, path: any): any => {
  let name: any = path;
  name = name.replace(/^\.\/(.*)\.\w+$/, "$1");
  const value: any = getFiles(path);
  mod[name] = value.default;
  return mod;
}, {});

var children = Object.keys(result).map((key: any): any => result[key]);

export default children;
