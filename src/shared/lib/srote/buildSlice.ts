import { bindActionCreators, createSlice } from "@reduxjs/toolkit";
import { CreateSliceOptions, SliceCaseReducers } from "@reduxjs/toolkit/dist";
import { useMemo } from "react";
import { useAppDispatch } from "../hooks/useAppDispathcer/useAppDispatch";

export function buildSlice<
  State,
  CaseReducers extends SliceCaseReducers<State>,
  Name extends string = string
>(options: CreateSliceOptions<State, CaseReducers, Name>) {
  const slice = createSlice(options);

  const useActions = (): typeof slice.actions => {
    const dispatch = useAppDispatch();

    return useMemo(
      //@ts-ignore
      () => bindActionCreators(slice.actions, dispatch),
      [dispatch]
    ) as unknown as typeof slice.actions;
  };

  return {
    ...slice,
    useActions,
  };
}
