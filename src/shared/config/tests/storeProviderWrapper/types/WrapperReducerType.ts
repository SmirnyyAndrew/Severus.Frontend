import { AnyAction } from "@reduxjs/toolkit";
import { Reducer } from "react";

export type WrapperReducerType<T> = Reducer<T | undefined, AnyAction>;
