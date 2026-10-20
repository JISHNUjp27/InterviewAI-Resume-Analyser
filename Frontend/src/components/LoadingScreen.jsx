import React from 'react'
import "./loading.scss"

const LoadingScreen = ({ message = "Loading", type = "default" }) => {
    return (
        <main className='loading-screen'>
            <div className='loading-screen__content'>
                <div className='loading-spinner'>
                    {type === "interview" && (
                        <svg className='loading-spinner__icon' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
                        </svg>
                    )}
                    <div className='loading-spinner__ring' />
                </div>
                <div className='loading-screen__text'>
                    <h1 className='loading-screen__title'>{message}</h1>
                    {type === "interview" && (
                        <p className='loading-screen__subtitle'>
                            Analyzing your resume, matching your skills to the role, and preparing personalized interview questions.
                        </p>
                    )}
                </div>
            </div>
        </main>
    )
}

export default LoadingScreen
