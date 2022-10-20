import './styles/App.scss'
import { api, useGetAuthorizationQuery } from './services/API'
import DepartureBoard from './pages'
import { useEffect } from 'react'
import { useAppDispatch } from './store/hook'

const App = () => {
  const dispatch = useAppDispatch()
  const { data } = useGetAuthorizationQuery() // load page get token

  useEffect(() => {
    console.log('env-----', process.env.REACT_APP_CLIENT_ID, process.env.REACT_APP_CLIENT_SECRET)
  }, [])

  useEffect(() => {
    // get station list
    dispatch(api.endpoints.getStation.initiate())
  }, [data])

  return <div className="App">{(data != null) ? <DepartureBoard /> : null}</div>
}

export default App
