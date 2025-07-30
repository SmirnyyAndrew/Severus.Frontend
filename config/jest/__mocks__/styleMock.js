// Для экспорта стилей в тестах через import * as
module.exports = new Proxy(
  {},
  {
    get: (target, key) => key,
  }
);
