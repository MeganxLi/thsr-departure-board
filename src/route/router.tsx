import NewDepartureBoard from '../pages/new'
import OldDepartureBoard from '../pages/old'

const routes: PageListType[] = [
  {
    name: '新時刻表',
    path: '/',
    element: <NewDepartureBoard />
  },
  {
    name: '舊時刻表',
    path: '/old',
    element: <OldDepartureBoard />
  }

]

export default routes
