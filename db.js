const appsRoute = require("./db/apps.json");
const whatsappRoute = require("./db/whatsapp.json");
const fs = require("fs");
const path = require("path");

// function to read JSOn files in the db folder
function readJSONFilesInDBFolder() {
  const dbFolderPath = path.join(__dirname, "db");
  const files = fs.readdirSync(dbFolderPath);
  const jsonFiles = files.filter((file) => path.extname(file) === ".json");
  const data = {};

  jsonFiles.forEach((file) => {
    const filePath = path.join(dbFolderPath, file);
    const fileData = fs.readFileSync(filePath, "utf-8");
    const jsonData = JSON.parse(fileData);
    const fileName = path.basename(file, ".json");
    data[fileName] = jsonData;
  });

  return data;
}

module.exports = () => {
  return {
    ...readJSONFilesInDBFolder(),
  };
};
