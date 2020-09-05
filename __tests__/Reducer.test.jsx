import { useReducer } from "react";
import { act, renderHook } from "@testing-library/react-hooks";
import { reducer } from "../src/reducers/Todo";
import { ADD_TODO } from '../src/constants/Actions'

describe("Todo reducer tests", () => {
  it("Add Todo", () => {
    const { result } = renderHook(() => useReducer(reducer, []));
    const [state, dispatch] = result.current;

    act(() => {
      dispatch({type: ADD_TODO })
    });

    expect(state).toMatchObject([]);
  });
});
