import NewTime from '../../components/NowTime'
import DirectionStation from './DirectionStation'

const NewDepartureBoard = () => {
  return (
    <div id="New_DepartureBoard">
      <p>
        <span>南下 Southbound</span>
        <span>Northbound 北上</span>
      </p>
      <DirectionStation Direction={false} />
      <NewTime />
      <DirectionStation Direction={true} />
    </div>
  )
}

export default NewDepartureBoard
