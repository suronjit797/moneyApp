
import Layout from '../Components/Layout'
import styles from '../styles/Home.module.css'
import { home } from '../store/actions/authActions'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import TransitionList from '../Components/TransitionList'
import RightNav from '../Components/RightNav'


function Home({ home }) {


  useEffect(() => {
    home()
  }, [])

  return (
    <Layout title='Home || Money Management App'>
      <div className={styles.home}>
        <RightNav />
        <TransitionList />
      </div>
    </Layout>
  )
}


export default connect(null, { home })(Home)