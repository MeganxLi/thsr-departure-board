export const getToday = new Date().toISOString().substring(0, 10); // 取得今天日期轉 yyyy-mm-dd 

export const getNowTime = new Date().toLocaleString('zh-TW', {
  hour12: false, hour: "2-digit", minute: "2-digit"
});; // 取得現在時間 hh:mm