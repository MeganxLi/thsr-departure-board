export const getToday = () => new Date().toLocaleDateString("zh-TW").replace(/\//g, "-"); // 取得今天日期轉 yyyy-mm-dd

export const getNowTime = () =>
  new Date().toLocaleString("zh-TW", {
    hourCycle: "h23",
    hour: "2-digit",
    minute: "2-digit",
  }); // 取得現在時間 hh:mm
