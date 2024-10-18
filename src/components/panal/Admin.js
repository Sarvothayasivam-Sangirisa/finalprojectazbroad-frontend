import React from 'react'
import AdminHeroSection from '../pages/admin/AdminHeroSection';
import AdminUser from '../pages/admin/AdminUser';
import AdminPlans from '../pages/admin/AdminPlans';
import AdminCard from '../pages/admin/AdminCard'; 
import AdminCardService from '../pages/admin/AdminCardService';
import AdminServices from '../pages/admin/AdminServices';
import AdminFAQ from '../pages/admin/AdminFAQ'; 

const Admin = () => {
  return (
    <div>
      {/* <AdminHeroSection /> */}
      <AdminCard />
      <AdminCardService />
      <AdminUser/>
      <AdminPlans />
      <AdminServices />
      <AdminFAQ />
    </div>
  )
}

export default Admin;
// import React, { useState } from 'react';
// import React, { useState } from 'react'; // Ensure useState is imported
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCreditCard, faToolbox, faUser, faClipboardList, faCog, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
// import AdminUser from '../pages/admin/AdminUser';
// import AdminPlans from '../pages/admin/AdminPlans';
// import AdminCard from '../pages/admin/AdminCard'; 
// import AdminCardService from '../pages/admin/AdminCardService';
// import AdminServices from '../pages/admin/AdminServices';
// import AdminFAQ from '../pages/admin/AdminFAQ';

// const Admin = () => {
//   const [activeComponent, setActiveComponent] = useState('AdminCard'); // Default component

//   const renderComponent = () => {
//     switch(activeComponent) {
//       case 'AdminCard':
//         return <AdminCard />;
//       case 'AdminCardService':
//         return <AdminCardService />;
//       case 'AdminUser':
//         return <AdminUser />;
//       case 'AdminPlans':
//         return <AdminPlans />;
//       case 'AdminServices':
//         return <AdminServices />;
//       case 'AdminFAQ':
//         return <AdminFAQ />;
//       default:
//         return <AdminCard />;
//     }
//   };

//   return (
//     <div style={{ display: 'flex' }}>
//       {/* Sidebar */}
//       <div style={{ width: '200px', background: '#f0f0f0', padding: '10px' }}>
//         <ul style={{ listStyleType: 'none', padding: 0 }}>
//           <li style={{ padding: '8px' }}>
//             <a onClick={() => setActiveComponent('AdminCard')} style={{ cursor: 'pointer', textDecoration: 'none', color: 'black' }}>
//               <FontAwesomeIcon icon={faCreditCard} /> Admin Card
//             </a>
//           </li>
//           <li style={{ padding: '8px' }}>
//             <a onClick={() => setActiveComponent('AdminCardService')} style={{ cursor: 'pointer', textDecoration: 'none', color: 'black' }}>
//               <FontAwesomeIcon icon={faToolbox} /> Admin Card Service
//             </a>
//           </li>
//           <li style={{ padding: '8px' }}>
//             <a onClick={() => setActiveComponent('AdminUser')} style={{ cursor: 'pointer', textDecoration: 'none', color: 'black' }}>
//               <FontAwesomeIcon icon={faUser} /> Admin User
//             </a>
//           </li>
//           <li style={{ padding: '8px' }}>
//             <a onClick={() => setActiveComponent('AdminPlans')} style={{ cursor: 'pointer', textDecoration: 'none', color: 'black' }}>
//               <FontAwesomeIcon icon={faClipboardList} /> Admin Plans
//             </a>
//           </li>
//           <li style={{ padding: '8px' }}>
//             <a onClick={() => setActiveComponent('AdminServices')} style={{ cursor: 'pointer', textDecoration: 'none', color: 'black' }}>
//               <FontAwesomeIcon icon={faCog} /> Admin Services
//             </a>
//           </li>
//           <li style={{ padding: '8px' }}>
//             <a onClick={() => setActiveComponent('AdminFAQ')} style={{ cursor: 'pointer', textDecoration: 'none', color: 'black' }}>
//               <FontAwesomeIcon icon={faQuestionCircle} /> Admin FAQ
//             </a>
//           </li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div style={{ flex: 1, padding: '20px' }}>
//         {renderComponent()}
//       </div>
//     </div>
//   );
// };

// export default Admin;
