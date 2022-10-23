import './styles/App.scss'
import { api, useGetAuthorizationQuery } from './services/API'
import { useEffect } from 'react'
import { useAppDispatch } from './store/hook'
import { Routes, Route } from 'react-router-dom'
import routes from './route/router'
import SelectStation from './components/SelectStation'
import Nav from './components/Nav'

const App = () => {
  const dispatch = useAppDispatch()
  const { data } = useGetAuthorizationQuery() // load page get token

  useEffect(() => {
    // get station list
    dispatch(api.endpoints.getStation.initiate())
  }, [data])

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
