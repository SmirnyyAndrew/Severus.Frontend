//Есть готовая библиотека
//additional - массив дополнительных атрибутов (не зависят от условий)
//mods - объект, у которого ключ - название класса, а значение - boolean
////Пример: {hovered: true, selectable: true, red: false}

export type Mods = Record<string, boolean | string | undefined>;

export function classNames(
  cls: string,
  mods: Mods = {},
  additional: Array<string | undefined> = []
): string {
  return [
    cls,
    //Скопировать коллекцию
    ...additional.filter(Boolean),
    //Что-то типо foreach
    ...Object.entries(mods)
      .filter(([cls, value]) => Boolean(value))
      .map(([cls, value]) => cls),
  ].join(" ");
}
