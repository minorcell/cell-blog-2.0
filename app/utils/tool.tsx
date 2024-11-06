// 时间戳转年月日
export function formatTimestamp(timestamp: number | Date) {
  const date = new Date(timestamp);
  const year = date.getFullYear().toString().slice(-2); // 获取年份的后两位
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // 获取月份，并确保是两位数
  const day = date.getDate().toString().padStart(2, "0"); // 获取日期，并确保是两位数
  return `${year}-${month}-${day}`;
}
