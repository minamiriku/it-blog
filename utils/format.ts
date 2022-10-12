import dayjs from "dayjs";

export const formatDate = (date: string, format: string = "YYYY/MM/DD HH:mm") =>
  dayjs(date).format(format);
