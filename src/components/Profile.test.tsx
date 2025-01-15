import Profile from "./Profile";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

// Check if profile renders
test("renders content", () => {
  const component = render(
    <Profile
      img=""
      name="maria"
      username="maria1"
      description="hi"
      email=""
      nFollowers={7}
      nFollowings={8}
      nStars={9}
    />
  );
  component.getByText("maria");
});
