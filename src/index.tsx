import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import Footer from './components/Footer'
import store from './store'
import './styles/App.scss'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <App />
      <Footer />
    </Provider>
  </BrowserRouter>
)
