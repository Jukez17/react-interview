import React from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import { render, fireEvent, getAllByTestId } from "@testing-library/react";
import EditForm from "../src/components/todo/EditForm";
import UseInputState from "../src/hooks/UseInputState";

it("renders EditForm", () => {
  render(<EditForm />);
});

describe("Form", () => {
  it("Actions", () => {
    const { result } = renderHook(() => UseInputState());
    const { handleChange } = result.current;
    const preventDefault = jest.fn()
    const e = preventDefault
    const MockComponent = () => (
      <>
        {["Hello"].map((value) => [
          <form
            data-testid="form"
            onSubmit={e}
          >
            <input
              key={value}
              data-testid="formInput"
              value={value}
              onChange={handleChange}
            />
          </form>,
        ])}
      </>
    );

    const { container, getByTestId } = render(<MockComponent />);
    const form = getByTestId("form");
    const inputField = getByTestId("formInput");

    act(() => {
      fireEvent.click(inputField);
    });

    expect(container).toMatchSnapshot();
  });
});
