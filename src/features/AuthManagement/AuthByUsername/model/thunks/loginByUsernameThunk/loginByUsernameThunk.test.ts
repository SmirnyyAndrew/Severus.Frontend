import { User } from "entities/User";
import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk/TestAsyncThunk";
import { loginByUsernameThunk } from "./loginByUsernameThunk";

describe("loginByUsernameThunk", () => {
  test("post request", async () => {
    const testUsername = "admin";
    const testId = "1";
    const testPassword = "123";
    const userValue = { username: testUsername, id: testId };

    const thunk = new TestAsyncThunk(loginByUsernameThunk);
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));

    const result = await thunk.callThunk({
      username: testUsername,
      password: testPassword,
    });

    const user: User = result.payload as User;

    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(userValue);
    expect(user.id).toEqual(testId);
    expect(user.username).toEqual(testUsername);
  });
});
