import { formatTotal } from "./../../utils/formatTotal";

const DUMMY_NUMBER_1 = 10000;
const EXPECTED_RESULT_1 = "10.000";

const DUMMY_NUMBER_2 = 2000000;
const EXPECTED_RESULT_2 = "2.000.000";

const DUMMY_NUMBER_3 = -3000000;
const EXPECTED_RESULT_3 = "-3.000.000";

describe("formatTotal feature", () => {
  it("should return a formatted number", () => {
    expect(formatTotal(DUMMY_NUMBER_1)).toBe(EXPECTED_RESULT_1);
  });
  it("should return a formatted number", () => {
    expect(formatTotal(DUMMY_NUMBER_2)).toBe(EXPECTED_RESULT_2);
  });

  it("should return a formatted number", () => {
    expect(formatTotal(DUMMY_NUMBER_3)).toBe(EXPECTED_RESULT_3);
  });
});
