import NewDepartureBoard from '../pages/new'
import OldDepartureBoard from '../pages/old'

const routes: PageListType[] = [
  {
    path: '/',
    element: <NewDepartureBoard />
  },
  {
    path: '/old',
    element: <OldDepartureBoard />
  }

]

export default routes
