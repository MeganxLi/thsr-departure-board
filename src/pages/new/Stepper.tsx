import React, { useEffect, useState } from 'react'
import { useGetTrainNoInfoQuery } from '../../services/API'
import { useAppSelector } from '../../store/hook'
import { StyleNewStepper } from '../../styled/Stepper'
import { handleStopStationArray } from '../../utils/dataprocessor'

interface props {
  TrainNo: string
}

const Stepper = ({ TrainNo }: props) => {
  const { getStationList } = useAppSelector((state) => state.base)
  const { data } = useGetTrainNoInfoQuery({ TrainNo })
  const [StopStation, setStopStation] = useState<string[]>([])

  console.log('Stepper', data)

  useEffect(() => {
    if (data != null) {
      setStopStation(handleStopStationArray(data[0].StopTimes))
    }
  }, [data])

  return (
    <div id="New_Stepper">
      {getStationList.map((item: StationType, idx: number) => {
        return (
          <StyleNewStepper
            key={idx}
            $stopStation={StopStation.includes(item.StationName.Zh_tw)}>
            O
          </StyleNewStepper>
        )
      })}

    </div>
  )
}

export default Stepper
