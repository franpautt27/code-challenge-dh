import moment from "moment";
import "moment/locale/es";

export function parseDate(dateString) {
  let formattedDate = moment(dateString).format("DD [de] MMMM, GGGG");
  return formattedDate;
}
