import fs from "fs";
import path from "path";

const readFile = (filepath) => {
  try {
  const data = fs.readFileSync(filepath, 'utf8')
    return data;
} catch (err) {
    return null;
}}

const readFolder = (folder) => fs.readdirSync(folder).map((file) => `${folder}/${file}`);

const readFolders = (folders, extensions = []) =>
  folders
    .map((folder) => readFolder(folder))
    .reduce((items, current) => items.concat(current))
    .filter((file) => extensions.includes(path.extname(file)));

const writeFile = (filename, buffer) => fs.writeFileSync(filename, buffer);

const appendFile = (filename, buffer) => fs.appendFileSync(filename, buffer + '\r\n');

const readImageAsBase64 = (filepath) =>
  `data:image/${path.extname(filepath)};base64,${readFile(filepath).toString(
    "base64"
  )}`;

export {
  readFile,
  readImageAsBase64,
  readFolder,
  readFolders,
  writeFile,
  appendFile,
};
