import React, { useState } from 'react'
import "../auth.form.scss"
import { Link, useNavigate, useLocation } from 'react-router'
import { useAuth } from '../hooks/useAuth'
import LoadingScreen from "../../../components/LoadingScreen"

const Register = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { loading, handleRegister } = useAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await handleRegister({ username, email, password })
        const from = location.state?.from?.pathname || '/dashboard'
        navigate(from, { replace: true })
    }

    if (loading) {
        return <LoadingScreen message="Creating your account..." />
    }

    return (
        <main>
            <div className="form-container">
                <h1>Register</h1>

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            onChange={(e) => setUsername(e.target.value)}
                            type="text"
                            id='Username'
                            name='Username'
                            placeholder='Enter Your Username'
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            id='email'
                            name='email'
                            placeholder='Enter Email Address'
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="Password">Password</label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            id='password'
                            name='Password'
                            placeholder='Enter Password'
                        />
                    </div>

                    <button className='button primary-button'>Register</button>
                </form>

                <p>Already have an account? <Link to={"/login"}>Login</Link></p>
            </div>
        </main>

    )
}

export default Register