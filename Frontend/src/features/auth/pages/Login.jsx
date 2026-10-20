import React, { useState } from 'react'
import "../auth.form.scss"
import { Link, useNavigate, useLocation } from 'react-router'
import { useAuth } from '../hooks/useAuth'
import LoadingScreen from "../../../components/LoadingScreen"

const Login = () => {
    const { loading, handleLogin } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        await handleLogin({ email, password })
        const from = location.state?.from?.pathname || '/dashboard'
        navigate(from, { replace: true })
    }

    if (loading) {
        return <LoadingScreen message="Signing in..." />
    }

    return (
        <main>
            <div className="form-container">
                <h1>Login</h1>

                <form onSubmit={handleSubmit}>
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

                    <button className='button primary-button'>Login</button>
                </form>

                <p>Don't have an account? <Link to={"/register"}>Register</Link></p>
            </div>
        </main>

    )
}

export default Login