import { StoryContext, StoryFn } from "@storybook/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

export const RouterDecorator = (Story: StoryFn, context: StoryContext) => {
  const initialPath = context.parameters.routePath || "/";
  const pathPattern = context.parameters.routePathPattern || "*";

  console.log("initialPath", initialPath);

  return (
    <MemoryRouter initialEntries={[initialPath]}>
      <Routes>
        <Route path={pathPattern} element={<Story />} />
      </Routes>
    </MemoryRouter>
  );
};
