import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ userRole }) => {
  const links = userRole === 'admin' ? [
    { name: 'Dashboard', path: '/admin' },
    { name: 'Manage Rooms', path: '/admin/rooms' },
    { name: 'Manage Students', path: '/admin/students' },
    { name: 'Reports', path: '/admin/reports' },
  ] : [
    { name: 'Dashboard', path: '/student' },
    { name: 'My Room', path: '/student/room' },
    { name: 'Profile', path: '/student/profile' },
    { name: 'Complaints', path: '/student/complaints' },
  ];

  return (
    <div className="w-64 fixed bg-gray-800 text-white h-screen p-5">
      <h1 className="text-2xl font-bold mb-6">Hostel Management</h1>
      <ul>
        {links.map((link) => (
          <li key={link.name} className="mb-4">
            {/* <Link to={link.path} className="text-lg hover:text-gray-300"> */}
              {link.name}
            {/* </Link> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
