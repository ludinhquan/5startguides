import { REGEXP_PHONE_NUMBER } from "@/constants/regex";

export const getRequiredRule = (error) => ({
  required: true,
  message: error || "Bắt buộc",
});

export const getEmailRule = (error) => ({
  type: "email",
  message: error || "Email không đúng định dạng",
});

export const getPhoneNumberRule = (error) => ({
  pattern: REGEXP_PHONE_NUMBER,
  message: error || "Số điện thoại không chính xác",
});
