import styles from '../styles/Auth.module.css'
import { MdOutlineMailOutline } from 'react-icons/md';
import { CgLock } from 'react-icons/cg';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import Link from 'next/link'
import { useState } from 'react';
import { connect } from 'react-redux'
import { login } from '../store/actions/authActions'
import { useRouter } from 'next/router'


const Login = ({ login, auth }) => {
    let isUser
    if (typeof window !== 'undefined') {
        isUser = localStorage.getItem('token')
    }
    const router = useRouter()

    if (isUser) {
        router.push('/')
    }

    const { error } = auth
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = event => {
        event.preventDefault()
        login({ email, password,  })
    }

    return (
        <div className={`bg-info text-white ${styles.auth}`}>
            <h2> LOGIN </h2>
            <form className={styles.form}>

                <div className={`${styles.from_group}  ${error.email ? styles.from_group_error : ''}`}>
                    <label htmlFor="email"><MdOutlineMailOutline /></label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder='Enter your email'
                        autoComplete="off"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <p></p>
                    {
                        error.email ? <p className={styles.danger}> {error.email} </p> : ''
                    }
                </div>
                <div className={`${styles.from_group}  ${error.password ? styles.from_group_error : ''}`}>
                    <label htmlFor="password"><CgLock /></label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder='Enter your password'
                        autoComplete="off"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <p></p>
                    {
                        error.password ? <p className={styles.danger}> {error.password} </p> : ''
                    }
                </div>

                <div className={`fw-bold  ${styles.from_group}`}>
                    <label><AiOutlineUserAdd /></label>
                    <button type='submit' onClick={handleSubmit} > Login </button>
                </div>
            </form>

            <p className="text-center mt-3"> Do not have an account? <b className='ps-1 d-inline-block'> <Link href='/register'> Register now </Link> </b> </p>

        </div>
    );
};

const mapStateToProps = (state) => ({
    auth: state.auth
})




export default connect(mapStateToProps, { login })(Login);