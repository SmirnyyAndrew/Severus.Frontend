// ...args - любое количество аргументов
type AnyQueryHook = (...args: any[]) => any;
// для вывода массива типов аргументов [string, number, boolean ...]
type HookArgs<T> = T extends (...args: infer A) => any ? A : never;
type HookReturn<T> = T extends (...args: any[]) => infer R ? R : never;

export function buildMockRtkQuery<Q extends AnyQueryHook, DataType>(
  data: DataType,
  query: Q
) {
  return (...args: HookArgs<Q>): HookReturn<Q> => {
    if (__IS_STORYBOOK__) {
      // Пример мок-объекта — приводим к типу результата
      const mockedResult = {
        data,
        isLoading: false,
        isError: false,
        isSuccess: true,
        isUninitialized: false,
        error: undefined,
        status: "fulfilled",
        fulfilledTimeStamp: Date.now(),
        refetch: (() =>
          Promise.resolve()) as unknown as HookReturn<Q>["refetch"],
      };

      return mockedResult as HookReturn<Q>;
    }

    // В реальном режиме вызываем оригинальный хук
    return query(...args);
  };
}
