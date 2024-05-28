import { Component } from 'react'
import { MdOutlineVisibility } from "react-icons/md";
import { MdOutlineVisibilityOff } from "react-icons/md";

import { Link } from 'react-router-dom';

import './index.css'

class Login extends Component {
    state = {showPassword:false}


    onClickVisibleIcon =()=>{
        this.setState(prevState=>({
            showPassword:!prevState.showPassword
        }))
    }

    onSubmitForm = (e)=>{
        e.preventDefault()
    }


  render() {
    const {showPassword} = this.state

    const passwordType = showPassword ? 'text':'password'

    return (
      <div className='login-bg-container'>
        <div className='inner-container'>
        <form className='login-form-container' onSubmit={this.onSubmitForm}>
            <div className='top-container'>
                <img src='https://res.cloudinary.com/dvvhafkyv/image/upload/v1716626929/logo_svg_imlnpw.svg'
                 alt='avhita'
                 className='login-logo-image'
                 />
                 <hr className='login-horizontal-line'/>
                 <p className='login-description'>Login Using Social media to get quick access</p>
            </div>
            <div className='bottom-container'>
                <h1 className='login-heading'>Login</h1>
                <div className='label-input-container'>
                    <label htmlFor='email'  className='email-label'>Email</label>
                    <input required id='email' type='text' placeholder='email' className='email-input'/>

                </div>
                <div className='label-input-container'>
                    <label htmlFor='password'  className='email-label'>Password</label>
                    <div className='password-container'>
                        <input required id='password' type={passwordType} placeholder='Password' className='password-input'/>
                        {showPassword ? <MdOutlineVisibilityOff size={20} onClick={this.onClickVisibleIcon}/> : <MdOutlineVisibility size={20} onClick={this.onClickVisibleIcon} />}
                    </div>

                </div>

            <div className='forgot-password-container'>
                <p>Forgot password ?</p>
                <Link to='/forgot-password'>
                {/* <button type='button' className='change-password-button'>Change Password</button> */}
                <p className='change-password-button'>Change Password</p>
                </Link>
            </div>
            
            </div>
           <div className='dashboard-login-button-container'>
            <button type='submit' className='login-page-button'>Login</button>

           </div>
        </form>
        </div>
      </div>
    )
  }
}


export default Login