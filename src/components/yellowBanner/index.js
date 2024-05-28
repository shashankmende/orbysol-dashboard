import  { Component } from 'react'


import './yellowbanner.css'
import { Link } from 'react-router-dom'

 class YellowBanner extends Component {
  render() {
    return (
      
        <div className='yellow-bg-container'>
            <Link to='/registrations'>
            <div className='individual-banners'>
                <img src='https://res.cloudinary.com/dvvhafkyv/image/upload/v1716459778/Registration_icon_wqnfac.png'
                alt='banner-registration'
                />
                <h1>Registrations .....</h1>
            </div>
            </Link>
            <Link to='/new-enrollment'>
            <div className='individual-banners'>
                <img src='https://res.cloudinary.com/dvvhafkyv/image/upload/v1716459992/New_Registration_icon_gzusbd.png'
                alt='new-registration'
                />
                <h1>New Registrations .....</h1>
            </div>
            </Link>
            
            <div className='individual-banners'>
                <img src='https://res.cloudinary.com/dvvhafkyv/image/upload/v1716460028/Alerts_icon_wnumdn.png'
                alt='alert-registration'
                />
                <h1>Alerts .....</h1>
            </div>
            <div className='individual-banners'>
                <img src='https://res.cloudinary.com/dvvhafkyv/image/upload/v1716460073/Signature_icon_qc08dj.png'
                alt='sign-registration'
                />
                <h1>Signatures .....</h1>
            </div>
            <div className='individual-banners'>
                <img src='https://res.cloudinary.com/dvvhafkyv/image/upload/v1716460102/Patient_called_icon_yqkjqy.png'
                alt='patient-registration'
                />
                <h1>Patients Called .....</h1>
            </div>
            <div className='individual-banners'>
                <img src='https://res.cloudinary.com/dvvhafkyv/image/upload/v1716460140/dr.ai_icon_utez6v.png'
                alt='patient-registration'
                />
                <h1>Dr.AI .....</h1>
            </div>
            </div>
      
    )
  }
}


export default YellowBanner