import { AsyncThunkAction } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import axios, { AxiosStatic } from "axios";
import { ThunkExtraArgs } from "features/AuthManagement/AuthByUsername";

type ActionCreatorType<Return, Arg, RejectedValue> = (
  arg: Arg
) => AsyncThunkAction<
  Return,
  Arg,
  {
    rejectValue: RejectedValue;
    extra: ThunkExtraArgs;
    state: StateSchema;
  }
>;
jest.mock("axios");
// Мокаем не только модуль, но и внутренние поля
const mockedAxios = jest.mocked(axios, true);
export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>;

  getState: jest.MockedFunction<() => StateSchema>;

  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;
  api: jest.MockedFunctionDeep<AxiosStatic>;
  navigate: jest.MockedFn<any>;

  constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
    this.dispatch = jest.fn();
    this.getState = jest.fn();
    this.actionCreator = actionCreator;

    this.api = mockedAxios;
    this.navigate = jest.fn();
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(
      this.dispatch,
      this.getState as unknown as () => StateSchema,
      {
        api: this.api,
        navigate: this.navigate,
      }
    );

    return result;
  }
}
