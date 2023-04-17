import { sumProductPoints } from "./../../utils/sumProductPoints";

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
];

const EXPECTED_RESULT_DUMMY_PRODUCTS_1 = 200000;

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
];

const EXPECTED_RESULT_DUMMY_PRODUCTS_2 = -100000;

describe("sumProductPoints feature", () => {
  it("should return the total sum of points (adding the not redeemed products, and substracting the redeemed ones)", () => {
    expect(sumProductPoints(dummyProducts1)).toBe(
      EXPECTED_RESULT_DUMMY_PRODUCTS_1
    );
  });
  it("should return the total sum of points (adding the not redeemed products, and substracting the redeemed ones)", () => {
    expect(sumProductPoints(dummyProducts2)).toBe(
      EXPECTED_RESULT_DUMMY_PRODUCTS_2
    );
  });
});
