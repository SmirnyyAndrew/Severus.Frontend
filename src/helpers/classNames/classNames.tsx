//Есть готовая библиотека
//additional - массив дополнительных атрибутов (не зависят от условий)
//mods - объект, у которого ключ - название класса, а значение - boolean
////Пример: {hovered: true, selectable: true, red: false}

type Mods = Record<string, boolean | string>;

export function classNames(
  cls: string,
  mods: Mods,
  additional: string[]
): string {
  return [
    cls,
    //Скопировать коллекцию
    ...additional,
    //Что-то типо foreach
    Object.entries(mods)
      .filter(([cls, value]) => Boolean(value))
      .map(([cls, value]) => cls),
  ].join(" ");
}
