import React, { useEffect, useState } from 'react'
import { getNowTime } from '../utils/dataprocessor'
import AnalogClock from './AnalogClock'

const NewTime = () => {
  const [Time, setTime] = useState(getNowTime())

  useEffect(() => {
    // 每半分鐘更新時間
    const interval = setInterval(() => setTime(getNowTime()), 30000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="now-time">
      <AnalogClock />
      <div className="digital-clock">
        <p>現在時刻</p>
        <p>{Time}</p>
      </div>
    </div>
  )
}

export default NewTime
