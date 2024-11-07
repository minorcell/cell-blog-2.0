export function formatTimestamp(timestamp: number | Date): string {
  let date: Date;
  if (timestamp instanceof Date) {
    date = timestamp;
  } else {
    date = new Date(timestamp);
  }
  const now = new Date();

  const diff: number = now.getTime() - date.getTime();

  const oneDay: number = 24 * 60 * 60 * 1000;
  const oneHour: number = 60 * 60 * 1000;
  const oneMinute: number = 60 * 1000;

  if (diff < oneDay) {
    if (diff < oneMinute) {
      const secondsAgo: number = Math.floor(diff / 1000);
      return `${secondsAgo}秒前`;
    } else if (diff < oneHour) {
      const minutesAgo: number = Math.floor(diff / oneMinute);
      return `${minutesAgo}分钟前`;
    } else {
      const hoursAgo: number = Math.floor(diff / oneHour);
      return `${hoursAgo}小时前`;
    }
  } else if (diff < 7 * oneDay) {
    const daysAgo: number = Math.floor(diff / oneDay);
    return `${daysAgo}天前`;
  } else {
    const year: string = date.getFullYear().toString().slice(-2);
    const month: string = (date.getMonth() + 1).toString().padStart(2, "0");
    const day: string = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
}
