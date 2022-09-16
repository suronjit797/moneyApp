import styles from '../styles/Auth.module.css'
import { MdOutlineMailOutline } from 'react-icons/md';
import { CgLock } from 'react-icons/cg';
import { RiLoginCircleLine } from 'react-icons/ri';
import Link from 'next/link'
import { useState } from 'react';
import Swal from 'sweetalert2'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = event => {
        event.preventDefault()
        console.log(email, password)
    }

    const passwordHandler = async () => {
        const { value: email } = await Swal.fire({
            title: 'Input email address',
            input: 'email',
            inputLabel: 'Your email address',
            inputPlaceholder: 'Enter your email address'
        })

        if (email) {
            Swal.fire(`Entered email: ${email}`)
        }
    }


    return (
        <div className={`bg-info text-white ${styles.auth}`}>
            <h2> LOGIN </h2>
            <form className={styles.form}>
                <div className={styles.from_group}>
                    <label htmlFor="email"><MdOutlineMailOutline /></label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder='Enter your email'
                        autocomplete="off"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={styles.from_group}>
                    <label htmlFor="password"><CgLock /></label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder='Enter your password'
                        autocomplete="off"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className={`fw-bold  ${styles.from_group}`}>
                    <label><RiLoginCircleLine /></label>
                    <button type='submit' onClick={handleSubmit} > Login </button>
                </div>
            </form>
            <p className="text-center mt-3"> Don&apos;t have an account? <b className='ps-1 d-inline-block'> <Link href='/register'> Register Now </Link> </b> </p>

            <p style={{ cursor: 'pointer' }} onClick={passwordHandler}> Forgat your password? </p>

        </div>
    );
};

export default Login;