import { buildSlice } from "shared/lib/srote/buildSlice";
import { CommentSchema } from "../types/CommentSchema";

const initialState: CommentSchema = {
  value: 0,
};

export const CommentSlice = buildSlice({
  name: "Comment.slice",
  initialState,
  reducers: {
    action: (state) => {
      state.value += 1;
    },
  },
});

export const {
  actions: CommentActions,
  reducer: CommentReducer,
  useActions: useCommentActions,
} = CommentSlice;
