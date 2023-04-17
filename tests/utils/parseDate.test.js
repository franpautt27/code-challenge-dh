import { parseDate } from "./../../utils/parseDate";

describe("parseDate feature", () => {
  it("should return a formatted date string", () => {
    expect(parseDate("2023-03-10T21:42:22.255Z")).toBe("10 de marzo, 2023");
  });
  it("should return a formatted date string", () => {
    expect(parseDate("2022-12-09T10:20:00.909Z")).toBe("09 de diciembre, 2022");
  });

  it("should return error when null", () => {
    expect(parseDate(null)).toBe("Fecha inválida");
  });
});
