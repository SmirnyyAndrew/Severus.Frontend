import { ProfileExample } from "entities/Profile";
import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk/TestAsyncThunk";
import { getProfileDataThunk } from "./getProfileDataThunk";

describe("getProfileDataThunk", () => {
  test("get request", async () => {
    const thunk = new TestAsyncThunk(getProfileDataThunk);
    const data = ProfileExample;

    // ProfileDataExample - что возвращает moc-get запрос
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(data);
  });
});
