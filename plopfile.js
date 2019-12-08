/* eslint-disable */
const view = require("./plop-templates/view/prompt");
const component = require("./plop-templates/component/prompt");
const store = require("./plop-templates/store/prompt");

module.exports = function(plop) {
  plop.setGenerator("view", view);
  plop.setGenerator("component", component);
  plop.setGenerator("store", store);
};
