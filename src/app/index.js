const {
  GoogleAssistantPlatform,
  plugins,
  VoxaApp
} = require("voxa");
const config = require("../config");
const Model = require("./model");
const states = require("./states");
const variables = require("./variables");
const views = require("./views.json");

const voxaApp = new VoxaApp({ Model, views, variables });
states(voxaApp);

exports.assistantAction = new GoogleAssistantPlatform(voxaApp);

plugins.replaceIntent(voxaApp);

exports.voxaApp = voxaApp;
