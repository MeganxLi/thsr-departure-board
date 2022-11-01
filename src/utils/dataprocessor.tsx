export const getToday = () => new Date().toLocaleDateString('zh-TW', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit'
}).replace(/\//g, '-') // 取得今天日期轉 yyyy-mm-dd

export const getNowTime = () =>
  new Date().toLocaleString('zh-TW', {
    hourCycle: 'h23',
    hour: '2-digit',
    minute: '2-digit'
  }) // 取得現在時間 hh:mm

export const handleStopStationArray = (StopTimes: StopTimesType[]): string[] => {
  let newDataStopStation: string[] = []

  StopTimes.map((item: StopTimesType) => {
    return (newDataStopStation = [...newDataStopStation, item.StationName.Zh_tw])
  })

  return newDataStopStation
}
