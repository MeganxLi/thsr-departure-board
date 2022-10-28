
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { api, useGetAuthorizationQuery, useGetDesignatedStationQuery } from './services/API'
import { useAppDispatch, useAppSelector } from './store/hook'
import routes from './route/router'
import SelectStation from './components/SelectStation'
import Nav from './components/Nav'

const App = () => {
  const dispatch = useAppDispatch()
  const { currentData } = useGetAuthorizationQuery() // load page get token
  const { selectStation } = useAppSelector((state) => state.base)

  // get station schedule
  const { data } = useGetDesignatedStationQuery(selectStation, {
    pollingInterval: 60000, // 1 minute update data
    refetchOnMountOrArgChange: true
  })

  useEffect(() => {
    // get station list
    dispatch(api.endpoints.getStation.initiate())
  }, [currentData])

  return (<div className="App">
    <Nav />
    <SelectStation />
    {(data != null)
      ? (<Routes>
        {routes.map((router, i) => (
          <Route
            key={i}
            path={router.path}
            element={router.element}
          />))}
      </Routes>)
      : null}

  </div>)
}

export default App
