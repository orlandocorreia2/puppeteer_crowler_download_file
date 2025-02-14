import fs from "fs";

export const sleep = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time * 1000);
  });
};

export const deleteFile = (filePath) => {
  fs.unlink(filePath, function (err) {
    if (err) console.log("Error delete file!");
  });
};
