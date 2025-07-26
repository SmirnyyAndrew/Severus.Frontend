const fs = require("fs");
const path = require("path");

const cachePath = path.join(__dirname, "node_modules", ".cache");

try {
  fs.rmSync(cachePath, { recursive: true, force: true });
  console.log(`Папка c кэшем nodes_modules удалена: ${cachePath}`);
} catch (err) {
  console.error(`Ошибка при удалении папки: ${err.message}`);
}
