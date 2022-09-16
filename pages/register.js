import styles from '../styles/Auth.module.css'
import { MdOutlineMailOutline } from 'react-icons/md';
import { CgLock } from 'react-icons/cg';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import Link from 'next/link'
import { useState } from 'react';
import { connect } from 'react-redux'
import { register } from '../store/actions/authActions'
import Swal from 'sweetalert2'


const Register = ({register}) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    const handleSubmit = event => {
        event.preventDefault()
        if(password !== confirmPassword){
            return Swal.fire({
                title: 'Error',
                text: "Password dose not match"
            })
        }
        register({name, email, password, confirmPassword})
    }

    return (
        <div className={`bg-info text-white ${styles.auth}`}>
            <h2> REGISTER </h2>
            <form className={styles.form}>
                <div className={styles.from_group}>
                    <label htmlFor="name"><BiUser /></label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder='Enter your name'
                        autocomplete="off"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
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
                        required
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
                        required
                    />
                </div>
                <div className={styles.from_group}>
                    <label htmlFor="confirmPassword"><CgLock /></label>
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder='Confirm your password'
                        autocomplete="off"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <div className={`fw-bold  ${styles.from_group}`}>
                    <label><AiOutlineUserAdd /></label>
                    <button type='submit' onClick={handleSubmit} > Register </button>
                </div>
            </form>

            <p className="text-center mt-3"> Already have an account? <b className='ps-1 d-inline-block'> <Link href='/login'> Login in now </Link> </b> </p>

        </div>
    );
};

export default connect('', {register}) (Register);