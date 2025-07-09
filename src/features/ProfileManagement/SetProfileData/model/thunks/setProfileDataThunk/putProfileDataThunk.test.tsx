import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { ProfileExample } from "entities/Profile";
import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk/TestAsyncThunk";
import { putProfileDataThunk } from "./putProfileDataThunk";

describe("putProfileDataThunk", () => {
  test("put request", async () => {
    const thunk = new TestAsyncThunk(putProfileDataThunk);

    const state: DeepPartial<StateSchema> = {
      profile: {
        profileData: ProfileExample,
      },
    };

    thunk.getState.mockReturnValue(state as StateSchema);

    const data = ProfileExample;
    thunk.api.put.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk({
      profile: ProfileExample,
      profileId: ProfileExample.id,
    });

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
  });
});
