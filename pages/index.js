import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import { home } from '../store/actions/authActions'
import { connect } from 'react-redux'
import { useEffect } from 'react'

function Home({ home }) {
  // const router = useRouter()
  // const logout = () => {
  //   localStorage.removeItem('token')
  //   router.push('/login')
  // }

  useEffect(() => {
    home()
  }, [])

  return (
    <Layout title='Home || Money Management App'>







      {/* <button onClick={logout}> logout </button> */}
    </Layout>
  )
}


export default connect(null, { home })(Home)