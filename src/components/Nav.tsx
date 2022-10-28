import routes from '../route/router'
import { Link, useLocation } from 'react-router-dom'

const Nav = () => {
  const pathname = useLocation().pathname

  return (
    <nav>
      <ul>
        {routes.map((pages: PageListType, idx: number) => {
          return (
            <li key={idx} className={pages.path === pathname ? 'nav-action' : undefined}>
              <Link to={pages.path}>{pages.name}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav
