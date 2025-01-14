import Button from "./Button";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

// Check if button renders
test("renders content", () => {
  const component = render(
    <Button
      onClick={() => console.log("hello")}
      icon={null}
      label="test!"
      size="sm"
      iconFirst={false}
    />
  );
  component.getByText("test!");
});

// Check click button
test("clik button once", () => {
  const mockHandler = jest.fn();

  const component = render(
    <Button
      onClick={mockHandler}
      icon={null}
      label="test!2"
      size="sm"
      iconFirst={false}
    />
  );

  const button = component.getByText("test!2");
  fireEvent.click(button);
  expect(mockHandler.mock.calls).toHaveLength(1);
});
