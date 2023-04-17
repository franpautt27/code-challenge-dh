import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import Home from "../components/pages/Home";

import { getProducts } from "../services/products";

let component;

describe("Home", () => {
  beforeEach(() => {
    component = render(<Home />);
  });

  it("Renders correctly", () => {
    expect(component).toBeDefined();
    expect(component.getByTestId("loader")).toBeDefined();
    expect(component.queryAllByTestId("products-list").length).toEqual(0);
  });
  it("should render the products list after the API call", async () => {
    await waitFor(() =>
      expect(component.getByTestId("products-list")).toBeDefined()
    );
  });
  it("fetches successfully data from an API", async () => {
    const result = await getProducts();

    expect(result[0]).toHaveProperty(
      "createdAt",
      "product",
      "points",
      "image",
      "is_redemption",
      "id"
    );
  });
  it("should navigate to Detail screen after pressing an item", async () => {
    const navigation = { navigate: () => {} };

    jest.spyOn(navigation, "navigate");

    component = render(<Home navigation={navigation} />);

    await waitFor(() =>
      expect(component.getByTestId("products-list")).toBeDefined()
    );

    const productPress = component.queryAllByTestId("productPress");

    fireEvent.press(productPress[0]);

    expect(navigation.navigate).toHaveBeenCalledWith("Detail", {
      item: expect.any(Object),
    });
  });
});
