import React from 'react';
import { NavLink, Outlet } from 'react-router';
import ProFastLogo from '../Pages/Shared/ProFastLogo/ProFastLogo';
import { FaHome, FaBoxOpen, FaCreditCard, FaMapMarkedAlt, FaUserEdit, FaUserClock, FaUserCheck, FaMotorcycle, FaTasks, FaCheckCircle, FaWallet } from 'react-icons/fa';
import useUserRole from '../Hooks/useUserRole';
const DashedBoardLayout = () => {
  const {role,roleLoading} = useUserRole()
  console.log(role);
    return (
   <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

            {/* Main Content */}
            <div className="drawer-content flex flex-col">
                {/* Mobile Navbar */}
                <div className="navbar bg-base-300 w-full lg:hidden px-4 py-2">
                    <div className="flex items-center gap-2">
                        {/* Menu Icon */}
                        <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost p-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                        {/* Dashboard Text */}
                        <span className="text-lg font-semibold">Dashboard</span>
                    </div>
                </div>

                <Outlet />
            </div>

            {/* Sidebar */}
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    {/* Sidebar Items */}
                    <ProFastLogo></ProFastLogo>
                   <li>
  <NavLink to="/" className="flex items-center gap-2">
    <FaHome /> Home
  </NavLink>
</li>
<li>
  <NavLink to="/dashboard/myParcels" className="flex items-center gap-2">
    <FaBoxOpen /> My Parcels
  </NavLink>
</li>
<li>
  <NavLink to="/dashboard/paymentHistory" className="flex items-center gap-2">
    <FaCreditCard /> Payment History
  </NavLink>
</li>
<li>
  <NavLink to="/dashboard/track" className="flex items-center gap-2">
    <FaMapMarkedAlt /> Track a Package
  </NavLink>
</li>
<li>
  <NavLink to="/dashboard/profile" className="flex items-center gap-2">
    <FaUserEdit /> Update Profile
  </NavLink>
</li>
{/* rider links
 */}
{
!roleLoading && role == 'rider' && <>
   <li>
    <NavLink to="/dashboard/pending-deliveries">
        <FaTasks className='inline-block mr-2'></FaTasks>
        Pending Deliveries
    </NavLink>
   </li>
   <li>
    <NavLink to="/dashboard/completed-deliveries">
    <FaCheckCircle className='inline-block mr-2' />
      Completed Deliveries
    </NavLink>
   </li>
  
  <li>
    <NavLink to="/dashboard/my-earnings">
       <FaWallet className='inline-block mr-2' />
       My Earnings
    </NavLink>
  </li>
</> 
}



{/* admin links */}
{
  !roleLoading && role === 'admin' &&
  <>
  <li>
    <NavLink to="/dashboard/assign-rider">
    <FaMotorcycle className='inline-block mr-2' />
         Assign Rider
    </NavLink>
  </li>
   <li>
    <NavLink
      to="/dashboard/active"
      className={({ isActive }) =>
        isActive ? "text-primary font-semibold" : ""
      }
    >
      <FaUserCheck className="text-lg mr-2" />
      Active Riders
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/dashboard/pending"
      className={({ isActive }) =>
        isActive ? "text-primary font-semibold" : ""
      }
    >
      <FaUserClock className="text-lg mr-2" />
      Pending Riders
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/dashboard/makeadmin"
      className={({ isActive }) =>
        isActive ? "text-primary font-semibold" : ""
      }
    >
      <FaUserClock className="text-lg mr-2" />
      Make Admin
    </NavLink>
  </li>
  </>
}





                </ul>
            </div>
        </div>
    );
};

export default DashedBoardLayout;