import React, {useState} from 'react'
import Cookies from 'universal-cookie'
import axios from 'axios';

import SigninImage from '../assets/signup.jpg';

const initialState = {
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    avatarURL: ''
}

const Auth = () => {
    const [form, setForm] = useState(initialState);
    const [isSignup, setisSignup] = useState(true);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name] : e.target.value });
    };

    const switchMode = () => {
        setisSignup((prevIsSignup) => !prevIsSignup)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form)
    }

    return (
        <div className='auth__form-container'>
            <div className='auth__form-container_fields'>
                <div className='auth__form-container_fields-content'>
                    <p>{ isSignup ? 'Sign Up' : 'Sign In' }</p>
                    <form onSubmit={handleSubmit}>
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
                                <label htmlFor='phoneNumber'>Phone Number</label>
                                <input
                                    name='phoneNumber'
                                    placeholder='Phone Number'
                                    type='text'
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        { isSignup && (
                            <div className='auth__form-container_fields-content_input'>
                                <label htmlFor='avatarURL'>Avatar URL</label>
                                <input
                                    name='avatarURL'
                                    placeholder='Avatar URL'
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
                                <label htmlFor='confirmPassword'>Confirm Password</label>
                                <input
                                    name='confirmPassword'
                                    placeholder='Confirm Password'
                                    type='password'
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        <div className='auth__form-container_fields-content_button'>
                            <button>{ isSignup ? 'Sign Up' : 'Sign In' }</button>
                        </div>
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
