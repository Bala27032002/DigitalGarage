import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const SideNav = ({ children }) => {
  const menuItem = [
    {
      path: "/AddCourse",
      name: "Course management",
      icon: <ManageAccountsIcon />
    },
    {
      name: "Home",
      path: "/",
      icon: <HomeIcon />
    },
    {
      path: "/manage",
      name: "All Courses",
      icon: <SchoolIcon />
    },

  ];

  return (
    <div className="sidebarmain container-Fluid d-inline-flex fixed" style={{ marginTop: '10px', position: 'fixed', top: '7%' }}>
      <div className="sidebar">
        <div className="top_section">
          <h3 className="logo"></h3>
        </div>

        {menuItem.map((item, index) => (
          <div key={index}>
            <NavLink to={item.path} className="link" activeClassName="active">
              <div className="icon">{item.icon}</div>
              <div className="link_text" style={{ width: '320px', fontSize: '17px', }}>{item.name}</div>
            </NavLink>
          </div>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default SideNav;