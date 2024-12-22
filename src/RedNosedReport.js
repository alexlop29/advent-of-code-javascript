import { Base } from "./Base";

class RedNosedReport extends Base {
  constructor() {
    super();
  }

  parseRedNosedReport(file) {
    return super.parseFile();
  }

  findCountOfSafeReports(data) {
    let safe = 0;

    data.forEach((report) => {
      let values = report.split("");
      let safetyValue = true;
      values.forEach((value, index) => {
        if (index == values.length - 1) {
          return;
        }
        let next = values[index + 1];
        if (next < value) {
          safetyValue = false;
          return;
        }
      });
      if (safetyValue) {
        safe++;
      }
    });

    return safe;
  }
}

export { RedNosedReport };
