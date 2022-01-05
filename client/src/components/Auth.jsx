import React, {useState} from 'react'
import Cookies from 'universal-cookie'
import axios from 'axios';

import SigninImage from '../assets/signup.jpg';

const Auth = () => {
    const [isSignup, setisSignup] = useState(true);

    const handleChange = () => {};
    const switchMode = () => {};
    return (
        <div className='auth__form-container'>
            <div className='auth__form-container_fields'>
                <div className='auth__form-container_fields-content'>
                    <p>{ isSignup ? 'Sign Up' : 'Sign In' }</p>
                    <form onSubmit={()=> {}}>
                        { isSignup && (
                            <div className='auth__form-container_fields-content_input'>
                                <label htmlFor='fullName'>Full Name</label>
                                <input
                                    name='fullName'
                                    placeholder='Full Name'
                                    type='text'
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}

                        <div className='auth__form-container_fields-content_input'>
                            <label htmlFor='username'>Username</label>
                            <input
                                name='username'
                                placeholder='Username'
                                type='text'
                                onChange={handleChange}
                                required
                            />
                        </div>
                        { isSignup && (
                            <div className='auth__form-container_fields-content_input'>
                                <label htmlFor='phonenumber'>Phone Number</label>
                                <input
                                    name='phonenumber'
                                    placeholder='Phone Number'
                                    type='text'
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        { isSignup && (
                            <div className='auth__form-container_fields-content_input'>
                                <label htmlFor='avatarURL'>Avator URL</label>
                                <input
                                    name='avatarURL'
                                    placeholder='Avator URL'
                                    type='text'
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        <div className='auth__form-container_fields-content_input'>
                            <label htmlFor='password'>Password</label>
                            <input
                                name='password'
                                placeholder='Password'
                                type='password'
                                onChange={handleChange}
                                required
                            />
                        </div>
                        { isSignup && (
                            <div className='auth__form-container_fields-content_input'>
                                <label htmlFor='confirm-password'>Confirm Password</label>
                                <input
                                    name='confirm-password'
                                    placeholder='Confirm Password'
                                    type='password'
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                    </form>
                    <div className='auth__form-container_fields-account'>
                        <p>
                            { isSignup ? 'Already have an account' : 'Don"t have an account?' }
                            <span onClick={switchMode}>{ isSignup ? ' Sign In' : ' Sign Up' }</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth
