/* eslint-disable */

/*
 * camelCase: changeFormatToThis
 * snakeCase: change_format_to_this
 * dashCase/kabobCase: change-format-to-this
 * dotCase: change.format.to.this
 * pathCase: change/format/to/this
 * properCase/pascalCase: ChangeFormatToThis
 * lowerCase: change format to this
 * sentenceCase: Change format to this,
 * constantCase: CHANGE_FORMAT_TO_THIS
 * titleCase: Change Format To This
 * pkg: package.json 파일을 참조.
 */
const { notEmpty } = require("../utils");

module.exports = {
  // create you generators here
  description: "generate a store",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "store name please",
      validate: notEmpty("name")
    }
  ],
  actions: data => {
    const name = "{{lowerCase name}}";
    const actions = [
      {
        type: "add",
        path: `src/store/modules/${name}/index.ts`,
        templateFile: "plop-templates/store/index.txt",
        data: {
          name: name,
          index: "index"
        }
      },
      {
        type: "add",
        path: `src/store/modules/${name}/state.ts`,
        templateFile: "plop-templates/store/index.txt",
        data: {
          name: name,
          state: "state"
        }
      },
      {
        type: "add",
        path: `src/store/modules/${name}/mutations.ts`,
        templateFile: "plop-templates/store/index.txt",
        data: {
          name: name,
          mutations: "mutations"
        }
      },
      {
        type: "add",
        path: `src/store/modules/${name}/actions.ts`,
        templateFile: "plop-templates/store/index.txt",
        data: {
          name: name,
          actions: "actions"
        }
      },
      {
        type: "add",
        path: `src/store/modules/${name}/getters.ts`,
        templateFile: "plop-templates/store/index.txt",
        data: {
          name: name,
          getters: "getters"
        }
      }
    ];

    return actions;
  }
};
