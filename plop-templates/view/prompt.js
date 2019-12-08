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
  description: "generate vue View(Page)",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "view name please",
      validate: notEmpty("name")
    },
    {
      type: "confirm",
      name: "confirm",
      message: "Do you want to include a style tag?"
    }
  ],
  actions: data => {
    const name = "{{dashCase name}}";
    const actions = [
      {
        type: "add",
        path: `src/views/${name}/index.vue`,
        templateFile: "plop-templates/view/index.txt",
        data: {
          name: name,
          style: data.confirm
        }
      }
    ];

    return actions;
  }
};
