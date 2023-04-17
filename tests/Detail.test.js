import Detail from "./../components/pages/Detail";
import { fireEvent, render } from "@testing-library/react-native";

let component;
const navigation = {
  navigate: () => {},
  setOptions: () => {},
  goBack: () => {},
};
const route = {
  params: {
    item: {
      createdAt: "2022-12-09T10:20:00.909Z",
      product: "Fantastic Granite Bacon",
      points: 42416,
      image: "https://loremflickr.com/640/480/technics",
      is_redemption: false,
      id: "3",
    },
  },
};
describe("Detail", () => {
  it("Renders correctly", () => {
    jest.spyOn(navigation, "navigate");

    component = render(<Detail navigation={navigation} route={route} />);
    expect(component).toBeDefined();
  });
  it("should go back on pressing Accept button", () => {
    jest.spyOn(navigation, "navigate");
    jest.spyOn(navigation, "goBack");

    component = render(<Detail navigation={navigation} route={route} />);
    const goBackButton = component.queryByTestId("goBackButton");
    fireEvent.press(goBackButton);
    expect(navigation.goBack).toHaveBeenCalledTimes(1);
  });
});
