import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter()
  const logout = () => {
    localStorage.removeItem('token')
    router.push('/login')
  }
  return (
    <Layout title='Home || Money Management App'>
      <button onClick={logout}> logout </button>
    </Layout>
  )
}
