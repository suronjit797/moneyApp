import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import store from '../store'
import { Provider } from 'react-redux'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000/api/v1'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
