import {
  filterRedeemedProducts,
  filterWonProducts,
} from "./../../utils/filterProducts";

const dummyProducts1 = [
  {
    createdAt: "2022-12-09T10:20:00.909Z",
    product: "Fantastic Granite Bacon",
    points: 100000,
    image: "https://loremflickr.com/640/480/technics",
    is_redemption: false,
    id: "1",
  },
  {
    createdAt: "2022-12-09T10:20:00.909Z",
    product: "Fantastic Granite Bacon",
    points: 200000,
    image: "https://loremflickr.com/640/480/technics",
    is_redemption: false,
    id: "2",
  },
  {
    createdAt: "2022-12-09T10:20:00.909Z",
    product: "Fantastic Granite Bacon",
    points: 100000,
    image: "https://loremflickr.com/640/480/technics",
    is_redemption: true,
    id: "3",
  },
  {
    createdAt: "2022-12-09T10:20:00.909Z",
    product: "Fantastic Granite Bacon",
    points: 100000,
    image: "https://loremflickr.com/640/480/technics",
    is_redemption: true,
    id: "4",
  },
];

const EXPECTED_RESULT_DUMMY_PRODUCTS_1 = [
  {
    createdAt: "2022-12-09T10:20:00.909Z",
    product: "Fantastic Granite Bacon",
    points: 100000,
    image: "https://loremflickr.com/640/480/technics",
    is_redemption: false,
    id: "1",
  },
  {
    createdAt: "2022-12-09T10:20:00.909Z",
    product: "Fantastic Granite Bacon",
    points: 200000,
    image: "https://loremflickr.com/640/480/technics",
    is_redemption: false,
    id: "2",
  },
];

const dummyProducts2 = [
  {
    createdAt: "2022-12-09T10:20:00.909Z",
    product: "Fantastic Granite Bacon",
    points: 100000,
    image: "https://loremflickr.com/640/480/technics",
    is_redemption: false,
    id: "1",
  },
  {
    createdAt: "2022-12-09T10:20:00.909Z",
    product: "Fantastic Granite Bacon",
    points: 200000,
    image: "https://loremflickr.com/640/480/technics",
    is_redemption: false,
    id: "2",
  },
  {
    createdAt: "2022-12-09T10:20:00.909Z",
    product: "Fantastic Granite Bacon",
    points: 400000,
    image: "https://loremflickr.com/640/480/technics",
    is_redemption: true,
    id: "3",
  },
  {
    createdAt: "2022-12-09T10:20:00.909Z",
    product: "Fantastic Granite Bacon",
    points: 500000,
    image: "https://loremflickr.com/640/480/technics",
    is_redemption: true,
    id: "4",
  },
];

const EXPECTED_RESULT_DUMMY_PRODUCTS_2 = [
  {
    createdAt: "2022-12-09T10:20:00.909Z",
    product: "Fantastic Granite Bacon",
    points: 400000,
    image: "https://loremflickr.com/640/480/technics",
    is_redemption: true,
    id: "3",
  },
  {
    createdAt: "2022-12-09T10:20:00.909Z",
    product: "Fantastic Granite Bacon",
    points: 500000,
    image: "https://loremflickr.com/640/480/technics",
    is_redemption: true,
    id: "4",
  },
];

describe("filter products feature", () => {
  it("should return a new array with only the won products", () => {
    expect(filterWonProducts(dummyProducts1)).toStrictEqual(
      EXPECTED_RESULT_DUMMY_PRODUCTS_1
    );
  });
  it("should return a new array with only the redeemed products", () => {
    expect(filterRedeemedProducts(dummyProducts2)).toStrictEqual(
      EXPECTED_RESULT_DUMMY_PRODUCTS_2
    );
  });
});
