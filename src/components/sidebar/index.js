import { useState, useEffect } from 'react';
import './sidebar.css';
import { Link, useNavigate } from 'react-router-dom';

const sidebarList = [
  {
    id: 0,
    imageUrl: 'https://res.cloudinary.com/dvvhafkyv/image/upload/v1716112336/contacts_upuky1.png',
    text: "New Enrollment",
    linkPath: '/new-enrollment'
  },
  {
    id: 1,
    imageUrl: 'https://res.cloudinary.com/dvvhafkyv/image/upload/v1716112336/contacts_upuky1.png',
    text: 'Patients',
    linkPath: '/patients'
  },
  {
    id: 2,
    imageUrl: 'https://res.cloudinary.com/dvvhafkyv/image/upload/v1716112336/contacts_upuky1.png',
    text: 'Dashboard',
    linkPath: '/'
  }
];

const Sidebar = () => {
  const [activeSideBarId, setActiveSideBarId] = useState(sidebarList[0].id);
  const navigate = useNavigate();

  const onClickNavElement = (e, id, linkPath) => {
    e.preventDefault();
    console.log('Clicked ID:', id);
    setActiveSideBarId(id);
    navigate(linkPath);
  };

  useEffect(() => {
    console.log('Render - Active SideBar ID:', activeSideBarId);
  }, [activeSideBarId]);

  return (
    <div className='sidebar'>
      <div className='logo-title-container'>
        <img src='https://res.cloudinary.com/dvvhafkyv/image/upload/v1716468194/Logo_Icon_tg4ruf.png'
          className='web-logo'
          alt='logo'
        />
        {/* <h1>Ogroup Hospital</h1> */}
      </div>
      <ul>
        {sidebarList.map(each => {
          const { id, imageUrl, text, linkPath } = each;
          // const selectedCss = (id === activeSideBarId) ? 'active-css' : '';
          // const buttonCss = (id === activeSideBarId) ? 'button-active-css' : '';
          return (
            <li key={id} >
              <Link to={linkPath} onClick={(e) => onClickNavElement(e, id, linkPath)}>
                <button >
                  <img src={imageUrl}
                    className='sidebar-link'
                    alt={text}
                  />
                  <p>{text}</p>
                </button>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;