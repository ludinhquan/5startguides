import moment from "moment";
import { PREFIX_PHONE } from "@/constants/regex";

export const formatDateTime = (datetime, format = "DD/MM/YYYY") =>
  moment(datetime).format(format);

export const formatVietnamesePhone = (phone) => {
  if (!phone) return "";
  if (phone.match(PREFIX_PHONE)) return phone.replace(PREFIX_PHONE, "+84");
  return `+84${phone}`;
};
