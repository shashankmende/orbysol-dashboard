import { Component } from 'react'
import { MdOutlineVisibility } from "react-icons/md";
import { MdOutlineVisibilityOff } from "react-icons/md";

import { Link } from 'react-router-dom';
import logo from '../../logo svg.svg'

import './login.css'

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
        
        <form className='login-form-container' onSubmit={this.onSubmitForm}>
            <div className='top-container'>
                <img src={logo} alt='avhita' className='login-logo-image'/>
                
                <p className='horizontal-line-para'></p>
                <p className='login-description'>Login Using Social media to get quick access</p>
            
            </div>
            <div className='bottom-container'>
                <h1 className='login-heading'>Login</h1>
                <div className='email-input-container'>
                    <label className='email-label' htmlFor='email'>Email</label>
                    <input required className='email-input' id='email' type='text' placeholder='Enter your email'/>

                </div>
                <div className='password-input-container'>
                    <label className='password-label' htmlFor='password'>Password</label>
                    <div className='password-container'>
                        <input className='password-input' id='password' type={passwordType} placeholder='Password'/>
                        {showPassword ? <MdOutlineVisibilityOff size={20} onClick={this.onClickVisibleIcon}/>:<MdOutlineVisibility size={20} onClick={this.onClickVisibleIcon}/>}
                    </div>
                    
                </div>
                
                    <p className='forgot-password-para'>Forgot Password?<Link to='/forgot-password'><span className='span-element'>Change Password</span></Link></p>
                <Link to='/dashboard'><button type='submit' className='login-page-button'>Login</button></Link>
            </div>
        </form>
        </div>
      
    )
  }
}


export default Login