import Repository from "./Repository";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

// Check if repository renders
test("renders content", () => {
  const component = render(
    <Repository
      title="repotitle"
      description="desc"
      language="Java"
      lastUpdate="6/7/23"
      nForks={8}
    />
  );
  component.getByText("repotitle");
});
