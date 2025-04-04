import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'
import { store } from './store'

import Rotas from './routes'
import Footer from './componests/Footer'
import Cart from './componests/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <Footer />
      </BrowserRouter>
      <Cart />
    </Provider>
  )
}

export default App
