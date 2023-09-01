import React from "react";

import { render } from "@testing-library/react-native";

import MainProducts from "../../../src/components/MainProducts";

describe("components/MainProducts", () => {
  test("renderCorrectly", () => {
    const { getByTestId, debug } = render(<MainProducts products={[]} />);
    debug();
  });
});
