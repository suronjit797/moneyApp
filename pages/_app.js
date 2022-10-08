import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import store from '../store'
import { Provider } from 'react-redux'
import axios from 'axios'
import setAuthToken from '../utilities/setAuthToken';


// axios.defaults.baseURL = 'http://localhost:5000/api/v1'
axios.defaults.baseURL = 'https://money-management-app.onrender.com/api/v1'


function MyApp({ Component, pageProps }) {
  // auth token
  let token
  if (typeof window !== 'undefined') {
    token = localStorage.getItem('token')
  }
  if(token){
    setAuthToken(token)
  }


  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
