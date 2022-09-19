import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import { home } from '../store/actions/authActions'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import TransitionList from '../components/TransitionList'

function Home({ home }) {


  useEffect(() => {
    home()
  }, [])

  return (
    <Layout title='Home || Money Management App'>
      <TransitionList />


    </Layout>
  )
}


export default connect(null, { home })(Home)