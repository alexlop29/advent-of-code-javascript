import { RedNosedReport } from "../src/RedNosedReport";

describe("Should describe Red-Nosed Reports", () => {
  let report = new RedNosedReport();

  test("Should find the number of unsafe reports", () => {
    let data = report.parseFile("./RedNosedReport.txt");
    expect(report.findCountOfSafeReports(data)).toBe(2);
  });
});
