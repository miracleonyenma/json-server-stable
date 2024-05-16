const appsRoute = require("./db/apps.json");
const whatsappRoute = require("./db/whatsapp.json");

module.exports = () => {
  return {
    apps: appsRoute,
    whatsapp: whatsappRoute,
  };
};
