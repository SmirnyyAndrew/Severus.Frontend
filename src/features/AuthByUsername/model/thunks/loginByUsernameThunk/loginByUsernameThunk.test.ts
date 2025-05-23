import axios from "axios";
import { User } from "entities/User";
import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk/TestAsyncThunk";
import { loginByUsernameThunk } from "./loginByUsernameThunk";

jest.mock("axios");
// Мокаем не только модуль, но и внутренние поля
const mockedAxios = jest.mocked(axios, true);
describe("loginByUsernameThunk", () => {
  test("post request", async () => {
    const testUsername = "admin";
    const testId = "1";
    const testPassword = "123";
    const userValue = { username: testUsername, id: testId };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

    const thunk = new TestAsyncThunk(loginByUsernameThunk);
    const result = await thunk.callThunk({
      username: testUsername,
      password: testPassword,
    });

    const user: User = result.payload as User;

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(userValue);
    expect(user.id).toEqual(testId);
    expect(user.username).toEqual(testUsername);
  });
});
