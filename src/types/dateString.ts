import moment from "moment";

function checkValidDateStr(str: string): str is DateStr {
  return str.match(/^\d{4}-\d{2}-\d{2}$/) !== null;
}
export function toDateStr(date: Date | moment.Moment | string): DateStr {
  if (typeof date === "string") {
    if (checkValidDateStr(date)) {
      return date;
    } else {
      throw new Error(`Invalid date string: ${date}`);
    }
  } else {
    const dateString = moment(date).format("YYYY-MM-DD");
    if (checkValidDateStr(dateString)) {
      return dateString;
    }
  }
  throw new Error(`invalid toDateStr provided: ${date}`);
}

enum DateStrBrand {}
export type DateStr = string & DateStrBrand;
