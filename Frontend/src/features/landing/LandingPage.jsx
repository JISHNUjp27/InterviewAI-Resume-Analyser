import React, { useState } from 'react'
import { Link } from 'react-router'
import './landing.scss'

const LandingPage = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const scrollToSection = (id) => {
        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
            setMobileMenuOpen(false)
        }
    }

    return (
        <div className='landing-page'>
            {/* ── Navigation ── */}
            <nav className='landing-nav'>
                <div className='landing-nav__inner'>
                    <div className='landing-nav__brand'>
                        <span className='landing-nav__logo'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
                            </svg>
                        </span>
                        <span className='landing-nav__name'>InterviewAI</span>
                    </div>

                    {/* Desktop links */}
                    <div className='landing-nav__links'>
                        <button onClick={() => scrollToSection('hero')} className='landing-nav__link'>Home</button>
                        <button onClick={() => scrollToSection('features')} className='landing-nav__link'>Features</button>
                        <button onClick={() => scrollToSection('how-it-works')} className='landing-nav__link'>How It Works</button>
                        <Link to="/login" className='landing-nav__link'>Login</Link>
                        <Link to="/register" className='landing-nav__cta'>Sign Up</Link>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className='landing-nav__hamburger'
                        onClick={() => setMobileMenuOpen(o => !o)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
                        )}
                    </button>
                </div>

                {/* Mobile menu */}
                {mobileMenuOpen && (
                    <div className='landing-nav__mobile-menu'>
                        <button onClick={() => scrollToSection('hero')} className='landing-nav__mobile-link'>Home</button>
                        <button onClick={() => scrollToSection('features')} className='landing-nav__mobile-link'>Features</button>
                        <button onClick={() => scrollToSection('how-it-works')} className='landing-nav__mobile-link'>How It Works</button>
                        <Link to="/login" className='landing-nav__mobile-link' onClick={() => setMobileMenuOpen(false)}>Login</Link>
                        <Link to="/register" className='landing-nav__mobile-cta' onClick={() => setMobileMenuOpen(false)}>Sign Up</Link>
                    </div>
                )}
            </nav>

            {/* ── Hero Section ── */}
            <section id="hero" className='landing-hero'>
                <div className='landing-hero__content'>
                    <h1 className='landing-hero__title'>
                        Prepare Smarter. <span className='landing-hero__accent'>Interview with Confidence.</span>
                    </h1>
                    <p className='landing-hero__subtitle'>
                        Analyze your resume against any job description, identify skill gaps, generate personalized interview questions, and create an ATS-friendly resume — all in one place.
                    </p>
                    <div className='landing-hero__actions'>
                        <Link to="/register" className='landing-hero__btn landing-hero__btn--primary'>Get Started</Link>
                        <Link to="/login" className='landing-hero__btn landing-hero__btn--secondary'>Login</Link>
                    </div>
                </div>

                {/* Dashboard Preview */}
                <div className='landing-hero__preview'>
                    <div className='preview-card'>
                        <div className='preview-card__header'>
                            <span className='preview-card__dot preview-card__dot--red' />
                            <span className='preview-card__dot preview-card__dot--yellow' />
                            <span className='preview-card__dot preview-card__dot--green' />
                            <span className='preview-card__title'>Interview Analysis Dashboard</span>
                        </div>
                        <div className='preview-card__body'>
                            {/* Match Score */}
                            <div className='preview-score'>
                                <div className='preview-score__ring'>
                                    <span className='preview-score__value'>87</span>
                                    <span className='preview-score__pct'>%</span>
                                </div>
                                <p className='preview-score__label'>Resume Match Score</p>
                            </div>

                            {/* Sample Questions */}
                            <div className='preview-questions'>
                                <div className='preview-q'>
                                    <span className='preview-q__badge'>Q1</span>
                                    <span className='preview-q__text'>Explain the difference between REST and GraphQL APIs</span>
                                </div>
                                <div className='preview-q'>
                                    <span className='preview-q__badge'>Q2</span>
                                    <span className='preview-q__text'>How do you optimize React component re-renders?</span>
                                </div>
                            </div>

                            {/* Skill Gap Tags */}
                            <div className='preview-skills'>
                                <span className='preview-skills__tag preview-skills__tag--high'>System Design</span>
                                <span className='preview-skills__tag preview-skills__tag--medium'>TypeScript</span>
                                <span className='preview-skills__tag preview-skills__tag--low'>Node.js</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Features Section ── */}
            <section id="features" className='landing-features'>
                <h2 className='landing-section__title'>Powerful Features</h2>
                <p className='landing-section__subtitle'>Everything you need to ace your next interview</p>

                <div className='landing-features__grid'>
                    <div className='feature-card'>
                        <div className='feature-card__icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                        </div>
                        <h3 className='feature-card__title'>AI Resume Analysis</h3>
                        <p className='feature-card__desc'>Analyze your resume against any target job description using advanced AI.</p>
                    </div>

                    <div className='feature-card'>
                        <div className='feature-card__icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                        </div>
                        <h3 className='feature-card__title'>Technical & Behavioral Questions</h3>
                        <p className='feature-card__desc'>Generate job-specific interview questions based on your profile and the role.</p>
                    </div>

                    <div className='feature-card'>
                        <div className='feature-card__icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                        </div>
                        <h3 className='feature-card__title'>Skill Gap Detection</h3>
                        <p className='feature-card__desc'>Identify skills that need improvement based on your target role requirements.</p>
                    </div>

                    <div className='feature-card'>
                        <div className='feature-card__icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
                        </div>
                        <h3 className='feature-card__title'>Personalized Preparation Plan</h3>
                        <p className='feature-card__desc'>Get a structured day-by-day plan to prepare for your upcoming interview.</p>
                    </div>

                    <div className='feature-card'>
                        <div className='feature-card__icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                        </div>
                        <h3 className='feature-card__title'>ATS-Friendly Resume</h3>
                        <p className='feature-card__desc'>Generate a tailored resume optimized for applicant tracking systems.</p>
                    </div>

                    <div className='feature-card'>
                        <div className='feature-card__icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                        </div>
                        <h3 className='feature-card__title'>Match Score</h3>
                        <p className='feature-card__desc'>See how closely your profile matches the target role with a detailed score.</p>
                    </div>
                </div>
            </section>

            {/* ── How It Works ── */}
            <section id="how-it-works" className='landing-steps'>
                <h2 className='landing-section__title'>How It Works</h2>
                <p className='landing-section__subtitle'>Three simple steps to interview success</p>

                <div className='landing-steps__grid'>
                    <div className='step-card'>
                        <div className='step-card__number'>1</div>
                        <h3 className='step-card__title'>Upload Your Resume</h3>
                        <p className='step-card__desc'>Upload your resume as a PDF or enter a quick self-description of your experience.</p>
                    </div>
                    <div className='step-card__connector'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                    </div>
                    <div className='step-card'>
                        <div className='step-card__number'>2</div>
                        <h3 className='step-card__title'>Add Job Description</h3>
                        <p className='step-card__desc'>Paste the target job description to let our AI understand the role requirements.</p>
                    </div>
                    <div className='step-card__connector'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                    </div>
                    <div className='step-card'>
                        <div className='step-card__number'>3</div>
                        <h3 className='step-card__title'>Get Your Strategy</h3>
                        <p className='step-card__desc'>Receive personalized interview questions, a preparation plan, and an ATS-friendly resume.</p>
                    </div>
                </div>
            </section>

            {/* ── CTA Section ── */}
            <section className='landing-cta'>
                <h2 className='landing-cta__title'>Ready to Ace Your Next Interview?</h2>
                <p className='landing-cta__subtitle'>Join thousands of candidates preparing smarter with AI-powered insights.</p>
                <Link to="/register" className='landing-cta__btn'>Get Started — It's Free</Link>
            </section>

            {/* ── Footer ── */}
            <footer className='landing-footer'>
                <div className='landing-footer__inner'>
                    <div className='landing-footer__brand'>
                        <span className='landing-nav__logo'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
                            </svg>
                        </span>
                        <span>InterviewAI</span>
                    </div>
                    <p className='landing-footer__copy'>&copy; {new Date().getFullYear()} InterviewAI. Built for interview preparation.</p>
                </div>
            </footer>
        </div>
    )
}

export default LandingPage
