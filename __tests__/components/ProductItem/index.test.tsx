import React from "react";

import { render } from "@testing-library/react-native";

import ProductItem from "../../../src/components/ProductItem";

import { Product } from "../../../src/models";

describe("components/ProductItem", () => {
  {
    test("renders Correctly", () => {
      const { toJSON } = render(
        <ProductItem item={new Product()} isFav={false} />
      );
      expect(toJSON()).toMatchSnapshot();
    });
  }
  test("renders tl text correctly", () => {
    const { getByTestId, getByText } = render(
      <ProductItem item={new Product()} isFav={false} />
    );

    const tl = getByText("\u20BA");
    const priceText = getByTestId("price-text");

    expect(priceText).toHaveTextContent("\u20BA");
    expect(tl).toBeDefined();
  });
  test("renders component with childrens correctly", () => {
    const { getByTestId } = render(
      <ProductItem item={new Product()} isFav={false} />
    );
    const addToCart = getByTestId("addToCart-btn");
    expect(addToCart.props.children.length).toBe(1);
    expect(addToCart.props.style.backgroundColor).toEqual("#2A59FE");
  });
});
