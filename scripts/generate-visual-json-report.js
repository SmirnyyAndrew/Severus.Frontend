const { promisify } = require("util");
const { readdir, writeFile, access } = require("fs");
const { join: joinPath, relative } = require("path");
const { constants } = require("fs");

const asyncReaddir = promisify(readdir);
const writeFileAsync = promisify(writeFile);
const accessAsync = promisify(access);

const lokiDir = joinPath(__dirname, "..", ".loki");
const actualDir = joinPath(lokiDir, "current");
const expectedDir = joinPath(lokiDir, "reference");
const diffDir = joinPath(lokiDir, "difference");

(async function main() {
  let diffs = [];

  try {
    // Проверка, существует ли папка
    await accessAsync(diffDir, constants.F_OK);
    diffs = await asyncReaddir(diffDir);
  } catch (err) {
    // Папки нет — diffs остаются пустыми
    console.warn(`No diffs found or folder "${diffDir}" is missing.`);
  }

  const report = {
    newItems: [],
    deletedItems: [],
    passedItems: [],
    failedItems: diffs,
    expectedItems: diffs,
    actualItems: diffs,
    diffItems: diffs,
    actualDir: relative(lokiDir, actualDir),
    expectedDir: relative(lokiDir, expectedDir),
    diffDir: relative(lokiDir, diffDir),
  };

  await writeFileAsync(
    joinPath(lokiDir, "report.json"),
    JSON.stringify(report, null, 2)
  );
})();
