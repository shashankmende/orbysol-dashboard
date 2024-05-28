import { Component } from 'react';
import Popup from 'reactjs-popup';
import { CiSearch } from "react-icons/ci";
import { PiSquaresFourThin } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { VscSettings } from "react-icons/vsc";
import { MdLogout } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { ImCancelCircle } from 'react-icons/im';
import { Link } from 'react-router-dom';

import './index.css';

class Header extends Component {
  state = { showProfile: false }

  onClickPopupcontainer = () => {
    this.setState(prevState => ({
      showProfile: !prevState.showProfile
    }));
  }

  onClickCancelIcon = () => {
    this.setState({ showProfile: false });
  }

  render() {
    const { showProfile } = this.state;
    return (
      <header>
        <div className='container1'>
          <img src='https://res.cloudinary.com/dvvhafkyv/image/upload/v1716468194/Logo_Icon_tg4ruf.png'
            alt='logo' className='logo-image' />
          <hr className='header-horizontal-line ' />
          <div className='three-icons-container'>
            <Link to='/'>
              <img src='https://res.cloudinary.com/dvvhafkyv/image/upload/v1716456829/Header_Dashboard_icon_xnm5om.png'
                alt='dashboard'
                className='icons'
              />
            </Link>
            <Link to='/registrations'>
              <img src='https://res.cloudinary.com/dvvhafkyv/image/upload/v1716459371/Header_registration_icon_vtd2wv.png'
                alt='registration'
                className='icons'
              />
            </Link>
            <img src='https://res.cloudinary.com/dvvhafkyv/image/upload/v1716457046/Header_Reports_Icon_i0ll9k.png'
              alt='report'
              className='icons'
            />
          </div>
          <div className='search-container'>
            <CiSearch />
            <input type='search' placeholder='Search For Patients' />
            <VscSettings />
          </div>
        </div>
        <div className='container2'>
          <div className='icon-container'>
            <PiSquaresFourThin className='four-square-icon' size={30} />
          </div>
          <div className='three-containers'>
            <div className='suresh-profile-container'>
              <CgProfile size={25} color='white' />
              <p className='suresh-name'>Dr.Suresh Kumar</p>
            </div>
            <hr className='header-horizontal-line ' />
            <div>
              <div className='profile-container-wrapper'>
              <div className='profile-down-arrow-container' onClick={this.onClickPopupcontainer}>
                <p>Profile & Settings</p>
                <IoMdArrowDropdown />
              </div>
              <Popup
                trigger={null}
                position="bottom bottom"
                open={showProfile}
                closeOnDocumentClick
                arrow={false}
                className="dropdown-popup"
                onClose={this.onClickCancelIcon}
                
                
              >
                {close => (
                  <div className='modal'>
                    <div className='inner-container'>
                      <div className='cancel-icon-container'>
                        <ImCancelCircle size={18} className='cancel-icon' onClick={close} />
                      </div>
                      <div className='links-container'>
                        <p className='links-para'><a href='/profile'>My Profile</a></p>
                        <p className='links-para'><a href='/change-password'>Change Password</a></p>
                        <p className='links-para'><a href='/settings'>Settings</a></p>
                        <p className='links-para'><a href='/help'>Help</a></p>
                      </div>
                    </div>
                  </div>
                )}
              </Popup>
              </div>
              {showProfile && <div className="overlay" onClick={this.onClickCancelIcon}></div>}
            </div>
            <hr className='header-horizontal-line ' />
            <Link to='/login'>
              <div className='profile-down-arrow-container'>
                <p className='logout-text'>Logout</p>
                <MdLogout />
              </div>
            </Link>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
