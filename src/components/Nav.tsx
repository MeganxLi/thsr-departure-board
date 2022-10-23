import routes from '../route/router'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <ul>
        {routes.map((pages: PageListType, idx: number) => {
          return (
            <li key={idx}>
              <Link to={pages.path}>{pages.name}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav
